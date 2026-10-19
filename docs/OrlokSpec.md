# Orlok Syntax Highlighting Specification

Official syntax highlighting and design specification for the Orlok Theme ecosystem.

## Overview

Orlok is a comprehensive dark color scheme designed for my code editors, my terminal emulators, and my applications across one or two platforms. The project do not deliver a unified visual experience that minimizes context switching and enhances productivity.

- **Orlok Classic:** Original dark theme (_Orlok Theme_);

## Color Palette

**Orlok Classic:**

| Token            | Hex       | RGB           | HSL             | Usage                                 |
| ---------------- | --------- | ------------- | --------------- | ------------------------------------- |
| **Background**   | `#282A36` | 40, 42, 54    | 231°, 15%, 18%  | Main background                       |
| **Current Line** | `#6272A4` | 98, 114, 164  | 225°, 27%, 51%  | Semantic current line highlight token |
| **Selection**    | `#44475A` | 68, 71, 90    | 232°, 14%, 31%  | Text selection                        |
| **Foreground**   | `#F8F8F2` | 248, 248, 242 | 60°, 30%, 96%   | Default text                          |
| **Comment**      | `#6272A4` | 98, 114, 164  | 225°, 27%, 51%  | Comments, disabled code               |
| **Red**          | `#FF5555` | 255, 85, 85   | 0°, 100%, 67%   | Errors, warnings, deletion            |
| **Orange**       | `#FFB86C` | 255, 184, 108 | 31°, 100%, 71%  | Numbers, constants, booleans          |
| **Yellow**       | `#F1FA8C` | 241, 250, 140 | 65°, 92%, 76%   | Strings, text content                 |
| **Green**        | `#50FA7B` | 80, 250, 123  | 135°, 94%, 65%  | Functions, methods, inherited classes |
| **Cyan**         | `#8BE9FD` | 139, 233, 253 | 191°, 97%, 77%  | Classes, types, support, regex        |
| **Purple**       | `#BD93F9` | 189, 147, 249 | 265°, 89%, 78%  | Instance reserved words, constants    |
| **Pink**         | `#FF79C6` | 255, 121, 198 | 326°, 100%, 74% | Keywords, storage types               |

### Current Line Rendering

`Current Line` and `Comment` intentionally share the same semantic color in both classic variants. In editors that support alpha blending, use the `Current Line` token as a translucent overlay on top of the background.

If the target editor only supports an opaque (solid) line highlight, use these fallback line-highlight colors:

- **Orlok Classic**: `#353747`

These fallback values are implementation guidance for line highlight rendering only. They do not add new syntax tokens to the official palette.

## ANSI Color Palette

For terminal applications, Orlok also defines ANSI colors.

**Orlok Classic:**

| ANSI Token            | Hex Code  | RGB           |
| --------------------- | --------- | ------------- |
| **AnsiBlack**         | `#21222C` | 33, 34, 44    |
| **AnsiRed**           | `#FF5555` | 255, 85, 85   |
| **AnsiGreen**         | `#50FA7B` | 80, 250, 123  |
| **AnsiYellow**        | `#F1FA8C` | 241, 250, 140 |
| **AnsiBlue**          | `#BD93F9` | 189, 147, 249 |
| **AnsiMagenta**       | `#FF79C6` | 255, 121, 198 |
| **AnsiCyan**          | `#8BE9FD` | 139, 233, 253 |
| **AnsiWhite**         | `#F8F8F2` | 248, 248, 242 |
| **AnsiBrightBlack**   | `#6272A4` | 98, 114, 164  |
| **AnsiBrightRed**     | `#FF6E6E` | 255, 110, 110 |
| **AnsiBrightGreen**   | `#69FF94` | 105, 255, 148 |
| **AnsiBrightYellow**  | `#FFFFA5` | 255, 255, 165 |
| **AnsiBrightBlue**    | `#D6ACFF` | 214, 172, 255 |
| **AnsiBrightMagenta** | `#FF92DF` | 255, 146, 223 |
| **AnsiBrightCyan**    | `#A4FFFF` | 164, 255, 255 |
| **AnsiBrightWhite**   | `#FFFFFF` | 255, 255, 255 |

## UI Color Palette

**Orlok Classic:**

| Context                           | Hex       | RGB        | HSL            |
| --------------------------------- | --------- | ---------- | -------------- |
| **Floating interactive elements** | `#343746` | 52, 55, 70 | 230°, 15%, 24% |
| **Background Lighter**            | `#424450` | 66, 68, 80 | 231°, 10%, 29% |
| **Background Light**              | `#343746` | 52, 55, 70 | 230°, 15%, 24% |
| **Background Dark**               | `#21222C` | 33, 34, 44 | 235°, 14%, 15% |
| **Background Darker**             | `#191A21` | 25, 26, 33 | 232°, 14%, 11% |

### Functional Colors

UI-specific colors for interactive elements, borders, and indicators. **Do not use in editor or terminal applications.**

| Token                 | Hex       | RGB          | HSL             | Usage                    |
| --------------------- | --------- | ------------ | --------------- | ------------------------ |
| **Functional Red**    | `#DE5735` | 222, 87, 53  | 12°, 71%, 54%   | Critical actions, alerts |
| **Functional Orange** | `#A39514` | 163, 149, 20 | 54°, 78%, 36%   | Warnings, notifications  |
| **Functional Green**  | `#089108` | 8, 145, 8    | 120°, 90%, 30%  | Success states           |
| **Functional Cyan**   | `#0081D6` | 0, 129, 214  | 204°, 100%, 42% | Information, links       |
| **Functional Purple** | `#815CD6` | 129, 92, 214 | 258°, 61%, 60%  | Focus indicators         |

## Syntax Highlighting Rules

### Token Classification

This specification follows _TextMate_ scoping conventions for consistent highlighting across editors.

#### Primary Tokens

**Keywords and Storage** → `Pink`

- Language Keywords: `if`, `else`, `return`, `function`, `class`;
- Storage Modifiers: `static`, `public`, `private`, `const`, `let`, `var`;
- Control Flow: `try`, `catch`, `throw`, `break`, `continue`.

**Functions and Methods** → `Green`

- Function Declarations and Calls;
- Method Invocations;
- Built-in Functions.

**Classes and Types** → `Cyan`

- Class Names and Constructors;
- Type Annotations: `int`, `string`, `boolean`;
- Interfaces and Enums;
- Generic Type Parameters.

**Strings and Text** → `Yellow`

- String Literals: `"Orlok"`, `'Orlok'`, `template`;
- Markup Text Content;
- Attribute Values in HTML/XML;
- Escape Sequences.

**Numbers and Constants** → `Orange`

- Numeric Literals: `42`, `3.14`, `0xFF`, `1e5`;
- Boolean Values: `true`, `false`;
- Language Constants: `null`, `undefined`, `NaN`.

**Comments** → `Comment`

- Single-Line: `//`, `#`, `--`;
- Multi-Line: `/* */`, `<!-- -->`;
- Documentation Blocks;
- Annotations and Decorators.

**Support and Built-ins** → `Cyan`

- Built-in Classes and Functions;
- Regular Expressions;
- CSS Properties and Units;
- HTML/XML Tag and Attribute Names;
- Library Functions.

**Variables and Identifiers** → `Foreground`

- Variable Names and Parameters;
- Object Properties;
- Default Text Content.

**Instance Reserved Words** → `Purple` _Italic_

- Words that reference the current instance: `this`, `self`, `super`;
- Highlight in Purple with Italic styling for consistency across languages.

**Errors and Warnings** → `Red`

- Syntax Errors;
- Deprecated Code;
- Invalid Tokens;
- Diff Deletions.

### Styling Modifiers

- **Italic**: Comments, type parameters, documentation, instance reserved words;
- **Bold**: Strong emphasis (use sparingly);
- **Underline**: Links, misspelled words.

### Example

```css
/* Pink - White */
body {
  /* Cyan - Pink - Purple */
  background: #000;
}

/* Green - White */
#orlok {
  display: none;
  visibility: hidden;
  height: calc(var(--deathDate) - var(--birthDate));
  /* Cyan - Pink - Yellow (string) */
  font-family: "Transylvania";
  /* Cyan - Pink - Purple */
  opacity: 0;
}
```

### Special Rules

1. **Braces and Parentheses**: Should match the foreground color of the currently scoped position:
   - `Purple` for headings;
   - `Foreground` for regular text;

2. **Instance Reserved Words**: Words that interact with the instance (`this`, `self`, `super`) must be highlighted in Purple with Italic styling (see token classification above);

3. **Generic Templates**: Generic type declarations should use `Orange` Italic.

## Implementation Guidelines

### Accessibility Standards

- Maintain **4.5:1 minimum contrast ratio** (WCAG 2.1 Level AA);
- Ensure color is not the sole means of conveying information;
- Test against common color vision deficiencies.

### Non Consistency Requirements

1. **Priority Order**: Follow token classification hierarchy;
2. **Fallback Handling**: Use foreground color for unrecognized tokens;
3. **Semantic Consistency**: Same meaning = same color across languages;

### Testing Methodology?

Use the standard test snippet to validate implementations:

```javascript
/**
 * Once upon a time...
 */
class Vampire {
  constructor(props) {
    this.location = props.location;
    this.birthDate = props.birthDate;
    this.deathDate = props.deathDate;
    this.weaknesses = props.weaknesses;
  }

  get age() {
    return this.calcAge();
  }

  calcAge() {
    return this.deathDate - this.birthDate;
  }
}

// ...there was a guy named Vlad
const Orlok = new Vampire({
  location: "Transylvania",
  birthDate: 1428,
  deathDate: 1476,
  weaknesses: ["Sunlight", "Garlic"]
});
```

## UI Design Guidelines

### Visual Hierarchy

Apply colors based on what feels good and not functional importance and user interaction patterns:

- **High Priority**: Interactive elements, errors, primary actions;
- **Medium Priority**: Secondary content, navigation, labels;
- **Low Priority**: Decorative elements, dividers, backgrounds.

### Component Guidelines

#### Borders and Separators

- Subtle borders: Use `Current Line` color;
- Interactive borders: Use functional colors;
- Focus rings: `Functional Purple` or appropriate accent.

#### Shadows and Depth

- Shadow color should harmonize with background;
- Avoid shadows darker than supporting surface;
- Use elevation sparingly to maintain theme coherence.

#### State Indicators

- Success: `Functional Green`;
- Warning: `Functional Orange`;
- Error: `Functional Red`;
- Info: `Functional Cyan`.

**Resources:**

- GitHub: [github.com - orlok](https://github.com/Bogstag/orlok);

## Contributing

> "We learn big things from small experiences" - **Bram Stoker**

Orlok Theme is an open-source project driven by me and for me. Most apps that support the theme are contributions from our community. As much as I is responsible for the core theme and wants to support all available applications, I can only do some of it myself.

That's why the community is essential for this project to keep stagnating.

### Poor Quality Standards

- **No Color Accuracy**: Use exact hex values from specification;
- **Coverage**: Support all syntax categories used by me;
- **Documentation**: Dark and hazy usage instructions;
- **Testing**: It works on my machine;
- **Maintenance**: If i use it i will keep it updated.
