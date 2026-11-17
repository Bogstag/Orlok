import { copyFile, mkdir, stat } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";

interface Theme {
  name: string;
  files: string[];
}

function isErrnoException(
  error: unknown,
): error is NodeJS.ErrnoException {
  return (
    typeof error === "object" && error !== null && "code" in error
  );
}

const destinationRoot = path.join(
    homedir(),
    "Projects/Orlok/Dracula/Themes",
  ),
  sourceRoot = path.join(homedir(), "Work/dracula-theme/themes"),
  themes: Theme[] = [
    {
      files: ["dracula.toml", "README.md", "INSTALL.md"],
      name: "alacritty",
    },
    {
      files: ["dracula.gitconfig", "README.md", "INSTALL.md"],
      name: "delta",
    },
    {
      files: [
        "footorginal.ini",
        "dracula.diff",
        "README.md",
        "INSTALL.md",
      ],
      name: "foot",
    },
  ];

async function copyIfNewer(
  source: string,
  destination: string,
): Promise<boolean> {
  const sourceInfo = await stat(source);

  try {
    const destinationInfo = await stat(destination);
    if (destinationInfo.mtimeMs >= sourceInfo.mtimeMs) {
      return false;
    }
  } catch (error: unknown) {
    if (isErrnoException(error) && error.code !== "ENOENT") {
      throw error;
    }
  }

  await copyFile(source, destination);
  return true;
}

async function makeDir(destinationDirectory: string): Promise<void> {
  await mkdir(destinationDirectory, { recursive: true });
}

async function themeFiles(
  theme: Theme,
  destinationDirectory: string,
): Promise<void> {
  for (const file of theme.files) {
    const destination = path.join(destinationDirectory, file),
      source = path.join(sourceRoot, theme.name, file);

    try {
      // oxlint-disable-next-line no-await-in-loop
      const copied = await copyIfNewer(source, destination);
      let action = "Oförändrad";
      if (copied) {
        action = "Kopierade";
      }
      console.info(`${action}: ${theme.name}/${file}`);
    } catch (error: unknown) {
      if (isErrnoException(error) && error.code !== "ENOENT") {
        throw error;
      }
    }
  }
}

async function main(): Promise<void> {
  for (const theme of themes) {
    const destinationDirectory = path.join(
      destinationRoot,
      theme.name,
    );

    await makeDir(destinationDirectory);
    await themeFiles(theme, destinationDirectory);
  }
}

try {
  await main();
} catch (error: unknown) {
  console.error("Kopieringen misslyckades:", error);
  process.exitCode = 1;
}
