# Orlok

[Omarchy](https://omarchy.org)

> A dark theme for [Omarchy](https://omarchy.org).
> This Orlok Theme for Omarchy focuses on providing a cohesive and visually appealing setup for my environment.

This theme is primarly for [Omarchy](<https://omarchy.org>) and is a slightly modified dracula theme.

Orlok Theme is an open-source project driven by me and for me.
Most apps that support the theme are contributions from the community.

<!-- ![Not a Preview](./no-preview.png) -->

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

```ts
tsx utils/swapper.ts theme/colors.toml dracula/lazygit.dracula.yml
tsx utils/swapper.ts theme/colors.toml source
```

## License & Spec

- [Orlok Syntax Highlighting Specification](./docs/OrlokSpec.md)
- [Dracula Syntax Highlighting Specification](./docs/DraculaSpec.md)
- [MIT License](./LICENSE)

## Thanks

To the creators behind the scenes are [Lucas de França](https://github.com/luxonauta) and
[Zeno Rocha](https://github.com/zenorocha) and the rest of the [dracula theme](https://draculatheme.com) community
