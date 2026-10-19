#!/usr/bin/env tsx
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { basename, join, resolve } from "node:path";

const colorPath = process.argv[2];
const sourceInput = process.argv[3];

if (!colorPath || !sourceInput) {
  console.error(
    "Usage: tsx utils/swapper.ts <path-to-colors.toml> <source-file-or-directory>",
  );
  process.exit(1);
}

function listSourceFiles(path: string): string[] {
  const info = lstatSync(path);

  if (info.isSymbolicLink()) {
    throw new Error(`Source paths cannot be symbolic links: ${path}`);
  }

  if (info.isFile()) return [path];
  if (!info.isDirectory()) {
    throw new Error(`Source path is not a file or directory: ${path}`);
  }

  return readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(path, entry.name);
    if (entry.isDirectory()) return listSourceFiles(entryPath);
    if (entry.isFile()) return [entryPath];
    return [];
  });
}

try {
  const absoluteColorPath = resolve(colorPath);
  const directSourcePath = resolve(sourceInput);
  const absoluteSourcePath = existsSync(directSourcePath)
    ? directSourcePath
    : resolve("source", sourceInput);

  if (!existsSync(absoluteColorPath)) {
    throw new Error(`Color theme file does not exist: ${colorPath}`);
  }
  if (!existsSync(absoluteSourcePath)) {
    throw new Error(`Source file or directory does not exist: ${sourceInput}`);
  }

  const colorContent = readFileSync(absoluteColorPath, "utf-8");
  const sourceFiles = listSourceFiles(absoluteSourcePath).sort();
  if (sourceFiles.length === 0) {
    throw new Error(`No source files found: ${sourceInput}`);
  }

  const colors = new Map<string, string>();
  const colorRegex = /([a-zA-Z0-9_]+)\s*=\s*"*(#[a-fA-F0-9]+)"/g;
  let match: RegExpExecArray | null;

  while ((match = colorRegex.exec(colorContent)) !== null) {
    const [, key, hex] = match;
    if (key && hex && !colors.has(hex.toLowerCase())) {
      // The first key for a hex value is its canonical template variable.
      colors.set(hex.toLowerCase(), key);
    }
  }

  const tplDir = resolve("tpl");
  mkdirSync(tplDir, { recursive: true });

  const outputNames = new Map<string, string>();
  for (const sourceFile of sourceFiles) {
    const outputName = `${basename(sourceFile)}.tpl`;
    const previousSource = outputNames.get(outputName);
    if (previousSource) {
      throw new Error(
        `Sources '${previousSource}' and '${sourceFile}' would both write 'tpl/${outputName}'.`,
      );
    }
    outputNames.set(outputName, sourceFile);
  }

  for (const sourceFile of sourceFiles) {
    let content = readFileSync(sourceFile, "utf-8");

    for (const [hex, key] of colors) {
      content = content.replaceAll(new RegExp(hex, "gi"), `{{ ${key} }}`);
    }

    const outputPath = join(tplDir, `${basename(sourceFile)}.tpl`);
    writeFileSync(outputPath, content);
    console.log(`Generated template: ${outputPath}`);
  }
} catch (error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error(`Error processing files: ${errorMessage}`);
  process.exit(1);
}
