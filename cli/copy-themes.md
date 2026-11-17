# Orlok Dracula theme copy

Ett litet TypeScript CLI för Linux. Det kopierar en uttrycklig fillista per tema från
`$HOME/Work/dracula-theme/themes/<tema>` till
`$HOME/Projects/Orlok/Dracula/Themes/<tema>`.

Målmappar skapas automatiskt. En fil kopieras bara om målet saknas eller källfilen
har en senare ändringstid. Saknade källfiler hoppas över med en varning.

## Konfiguration

Fillistan finns i `src/copy-themes.ts`:

- `alacritty`: `dracula.toml`, `README.md`, `INSTALL.md`
- `delta`: `dracula.gitconfig`, `README.md`, `INSTALL.md`

Ändra listan där om du vill lägga till eller ta bort filer.

## Körning

Kräver Node.js 22.6 eller senare, som kan köra TypeScript-filer direkt.

Från den här mappen kör du:

```sh
npm run copy-themes
```

Du kan också köra direkt:

```sh
node src/copy-themes.ts
```

## Om globbar

`*.{toml,md}` väljer bara filer som matchar ändelserna `.toml` eller `.md` och
som finns i katalogen. `README.md` följer alltså med eftersom den matchar `.md`,
men `INSTALL.md` följer inte med automatiskt bara för att den är en standardfil;
den måste finnas och matcha mönstret. En explicit fillista gör det tydligt exakt
vilka filer som ska kopieras.
