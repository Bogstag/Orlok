return {
  {
    "bjarneo/aether.nvim",
    branch = "v3",
    name = "aether",
    priority = 1000,
    opts = {
      colors = {
        bg = "#282A36",
        dark_bg = "#21222C",
        darker_bg = "#191A21",
        lighter_bg = "#343746",

        fg = "#F8F8F2",
        dark_fg = "#6272A4",
        light_fg = "#F8F8F2",
        bright_fg = "#FFFFFF",
        muted = "#6272A4",

        red = "#FF5555",
        yellow = "#F1FA8C",
        orange = "#FFB86C",
        green = "#50FA7B",
        cyan = "#8BE9FD",
        blue = "#BD93F9",
        magenta = "#FF79C6",
        brown = "#805c36",

        bright_red = "#FF6E6E",
        bright_yellow = "#FFFFA5",
        bright_green = "#69FF94",
        bright_cyan = "#A4FFFF",
        bright_blue = "#D6ACFF",
        bright_magenta = "#FF92DF",

        accent = "#BD93F9",
        cursor = "#FFFFFF",
        foreground = "#F8F8F2",
        background = "#282A36",
        selection = "#44475A",
        selection_foreground = "#F8F8F2",
        selection_background = "#44475A",
      },
    },
  },
  {
    "LazyVim/LazyVim",
    opts = {
      colorscheme = "aether",
    },
  },
}
