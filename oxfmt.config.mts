import { defineConfig } from "oxfmt";

export default defineConfig({
  embeddedLanguageFormatting: "auto",
  ignorePatterns: ["dist/**", "*.min.js", "source/**", "templates/**"],
  printWidth: 100,
  sortImports: {
    groups: [
      "type-import",
      ["value-builtin", "value-external"],
      "type-internal",
      "value-internal",
      ["type-parent", "type-sibling", "type-index"],
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
    newlinesBetween: false,
  },
  sortPackageJson: {
    sortScripts: true,
  },
  overrides: [
    {
      files: [
        "/home/bogge/.config/Code/User/profiles/**/settings.json",
        "/home/bogge/.config/Code/User/settings.json",
        "/home/bogge/.markdownlint.jsonc",
        "/home/bogge/.oxfmtrc.jsonc",
      ],
      options: {
        trailingComma: "es5", // all dont work with source.sort.json or JSON: Sort document
      },
    },
  ],
});
