# Orlok

[Omarchy](https://omarchy.org)

> A dark theme for [Omarchy](https://omarchy.org).
> This Orlok Theme for Omarchy focuses on providing a cohesive and visually appealing setup for my environment.

This theme is primarly for [Omarchy](<https://omarchy.org>) and is a slightly modified dracula theme.

Orlok Theme is an open-source project driven by me and for me.
Most apps that support the theme are contributions from the community.

<!-- ![Not a Preview](./no-preview.png) -->

## Colors

| Name | Hex | Positive | Negative |
| ---- | --- | -------- | -------- |
| Lavender | #8a5faa | Gracefulness, calmness, and creativity | Impracticality, indecisiveness |
| Magenta | #be007c | Kindness, self-respect, compassion, gentleness, and tolerance | Arrogance, depression, and irritability |
| Pink | #ea4591 | Romance, tenderness, feminism, playfulness, and positivity | mmaturity, lack of self-esteem and will-power |
| Purple | #b163c6 | Royalty, luxury, nobility, wisdom, and creativity | Arrogance, extravagance, immaturity, and impracticality |
<!-- | | | | |  -->

### Sorted by

#### Brightness

- #be007c
- #8a5faa
- #ea4592
- #b063c6

#### Luminance

- #be007c
- #8a5faa
- #b063c6
- #ea4592

#### Hue

- #8a5faa
- #b063c6
- #be007c
- #ea4592

#### Chroma

- #8a5faa
- #b063c6
- #ea4592
- #be007c

### Gradient

- #ea4591
- #df4894
- #d54b97
- #ca4e99
- #bf519c
- #b5539f
- #aa56a2
- #9f59a4
- #955ca7
- #8a5faa

### Alternative colors

```css

  --font-family-editor: "CaskaydiaMono Nerd Font Mono", monospace, sans-serif;
  --font-family-preview: "CaskaydiaMono Nerd Font Mono", monospace, sans-serif;


--background-modifier-success: #50fa7b; /*no sure*/
--blockquote-border: #ffb86c;
--border-color: #2b2727; /*also like transparent*/
--code-block: #8be9fd;
--inline-code: #bd93f9;
--interactive-accent-hover: #ff5555;
--interactive-accent-rgb: 123, 108, 217;
--interactive-accent: #ffb86c;
--interactive-hover: #ff5555;
--interactive-normal: #ffb86c;
--pre-code: #44475a;
--scrollbar-active-thumb-bg: #ffffff33;
--scrollbar-bg: #ffffff0d;
--scrollbar-thumb-bg: #ffffff1a;

--text-accent-hover: #8be9fd;
--text-accent: #db1af4;
--text-error-hover: #ff79c6;
--text-error: #ff79c6;
--text-faint: #bd93f9;
--text-highlight-bg: #ff5555;
--text-muted: #f8f8f2;
--text-normal: #f8f8f2;
--text-on-accent: #bd93f9;
--text-selection: #6272a4; /* Chromium precess this color with alpha channel */
--text-title-h2: #bd93f9;
--text-title-h3: #ff5555;
--text-title-h4: #ffb86c;
--text-title-h5: #50fa7b;
--text-title-h6: #8be9fd;

--vim-cursor: #ff5555;
--text-title-h1: #ff79c6;

```

## Config

Or changes done by me, so i can remember what i have done.

### Icons

| Icon theme | Sample image |
| ------------------- | ------------ |
| `Yaru-magenta-dark` | ![Folder icon in Yaru-magenta-dark](./docs/images/Yaru-magenta-dark-24.png) |

[Icons theme file](./icons.theme)

### Installation

All instructions can be found here. But do not run the command below.

```bash
omarchy theme install https://github.com/NotDracula/ForOmarchy
```

### Util

#### Swapper

The TypeScript script replaces palette hex values with `{{ color }}` variables.
Pass a source file or directory; a path that is not found as given is resolved
relative to `source/`. Generated files go into `tpl/` with `.tpl` appended to
their filename. Directory input is processed recursively and flattened into
`tpl/`; duplicate output filenames are reported instead of overwriting each
other. Running the command again overwrites generated templates. Source files
are only read.

Run Swapper through mise with a theme TOML file and a source file or directory:

```bash
mise run swap theme/colors.toml source/dracula/lazygit.dracula.yml
mise run swap theme/colors.toml source/omarchy
```

Run the focused Swapper checks with:

```bash
mise run test
```

## License & Spec

- [Orlok Syntax Highlighting Specification](./docs/OrlokSpec.md)
- [Dracula Syntax Highlighting Specification](./docs/DraculaSpec.md)
- [MIT License](./LICENSE)

## Thanks

To the creators behind the scenes are [Lucas de França](https://github.com/luxonauta) and
[Zeno Rocha](https://github.com/zenorocha) and the rest of the [dracula theme](https://draculatheme.com) community
