#!/usr/bin/env tsx
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const [colorPath, sourceInput] = process.argv.slice(2);

if (!colorPath || !sourceInput) {
  console.error(
    "Usage: tsx utils/swapper.ts <path-to-colors.toml> <source-file-or-directory>",
  );
  process.exit(1);
}

function listSourceFiles(targetPath: string): string[] {
  const info = lstatSync(targetPath);

  if (info.isSymbolicLink()) {
    throw new Error(
      `Source paths cannot be symbolic links: ${targetPath}`,
    );
  }

  if (info.isFile()) {
    return [targetPath];
  }
  if (!info.isDirectory()) {
    throw new Error(
      `Source path is not a file or directory: ${targetPath}`,
    );
  }

  return readdirSync(targetPath, { withFileTypes: true }).flatMap(
    (entry) => {
      const entryPath = path.join(targetPath, entry.name);

      if (entry.isDirectory()) {
        return listSourceFiles(entryPath);
      }
      if (entry.isFile()) {
        return [entryPath];
      }
      return [];
    },
  );
}

try {
  const absoluteColorPath = path.resolve(colorPath),
    directSourcePath = path.resolve(sourceInput);
  let absoluteSourcePath = directSourcePath;

  if (!existsSync(directSourcePath)) {
    absoluteSourcePath = path.resolve("source", sourceInput);
  }

  if (!existsSync(absoluteColorPath)) {
    throw new Error(`Color theme file does not exist: ${colorPath}`);
  }
  if (!existsSync(absoluteSourcePath)) {
    throw new Error(
      `Source file or directory does not exist: ${sourceInput}`,
    );
  }

  const colorContent = readFileSync(absoluteColorPath, "utf8"),
    sourceFiles = listSourceFiles(absoluteSourcePath).toSorted();

  if (sourceFiles.length === 0) {
    throw new Error(`No source files found: ${sourceInput}`);
  }

  const colors = new Map<string, string>(),
    colorRegex =
      /(?<key>[a-zA-Z0-9_]+)\s*=\s*"*(?<hex>#[a-fA-F0-9]+)"/gu;

  for (const match of colorContent.matchAll(colorRegex)) {
    const key = match.groups?.key,
      hex = match.groups?.hex;

    if (!key || !hex || colors.has(hex.toLowerCase())) {
      continue;
    }

    colors.set(hex.toLowerCase(), key);
  }

  const tplDir = path.resolve("tpl");
  mkdirSync(tplDir, { recursive: true });

  const outputNames = new Map<string, string>();
  for (const sourceFile of sourceFiles) {
    const outputName = `${path.basename(sourceFile)}.tpl`,
      previousSource = outputNames.get(outputName);

    if (previousSource) {
      throw new Error(
        `Sources '${previousSource}' and '${sourceFile}' would both write 'tpl/${outputName}'.`,
      );
    }

    outputNames.set(outputName, sourceFile);
  }

  for (const sourceFile of sourceFiles) {
    let content = readFileSync(sourceFile, "utf8");

    for (const [hex, key] of colors) {
      content = content.replaceAll(
        new RegExp(hex, "giu"),
        `{{ ${key} }}`,
      );
    }

    const outputPath = path.join(
      tplDir,
      `${path.basename(sourceFile)}.tpl`,
    );
    writeFileSync(outputPath, content);
    console.info(`Generated template: ${outputPath}`);
  }
} catch (error) {
  const errorMessage =
    error instanceof Error ? error.message : String(error);
  console.error(`Error processing files: ${errorMessage}`);
  process.exit(1);
}
