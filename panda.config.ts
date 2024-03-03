import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  "*": {
    margin: 0,
    padding: 0,
  },

  "#root, #__next": {
    isolation: "isolate",
  },

  body: {
    position: "relative",
    textRendering: "optimizeLegibility",
    fontFeatureSettings: "'liga' on",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },

  i: {
    fontStyle: "italic",
  },

  "b, strong": {
    fontWeight: "450",
  },

  "h1, h2, h3, h4, h5": {
    fontFamily: "var(--font-denton)",
    fontVariationSettings: "'opsz' 1, 'wdth' 500, 'wght' 180",
    lineHeight: "1",
    color: "$hiContrast",
  },

  h1: { fontSize: "$h1", marginBottom: "$h1" },
  h2: { fontSize: "$h2", marginBottom: "$h2" },
  h3: { fontSize: "$h3", marginBottom: "$h3" },
  h4: { fontSize: "$h4", marginBottom: "$h4" },
  h5: { fontSize: "$h5", marginBottom: "$h5" },

  h6: {
    fontFamily: "var(--font-generalSans)",
    fontVariationSettings: "'opsz' 1, 'wdth' 100, 'wght' 400",
    fontSize: "$h6",
    textTransform: "uppercase",
    letterSpacing: "0.125em",
    color: "$midContrast",
    marginBottom: "$h6",
  },

  "p, ul, li, ol, a": {
    fontFamily: "var(--font-denton)",
    fontVariationSettings: "'opsz' 10, 'wdth' 500, 'wght' 200",
    fontSize: "$p",
    marginBottom: "$p",
    color: "$midContrast",
  },

  a: {
    cursor: "pointer",
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  conditions: {
    light: "[data-theme=light] &",
    dark: "[data-theme=dark] &",
  },

  // presets: [],
  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        tan: {
          1: { value: "#FDFCFD" },
          2: { value: "#F6F5F0" },
          3: { value: "#ECE8E6" },
          4: { value: "#E3E1DB" },
          5: { value: "#C1BFBA" },
          6: { value: "#A09E99" },
          7: { value: "#7E7C78" },
          8: { value: "#5C5A57" },
          9: { value: "#393936" },
          10: { value: "#171716" },
        },
      },
      fontSizes: {
        $h1: { value: "clamp(2.5rem, 3.695vw + 1.544rem, 4.5rem)" },
        $h2: { value: "clamp(2rem, 3.233vw + 1.163rem, 3.75rem)" },
        $h3: { value: "clamp(1.75rem, 3.233vw + 0.913rem, 3.5rem)" },
        $h4: { value: "clamp(1.5rem, 1.848vw + 1.022rem, 2.5rem)" },
        $h5: { value: "clamp(1.25rem, 1.386vw + 0.891rem, 2rem)" },
        $h6: { value: "0.75rem" },
        $p: { value: "clamp(1rem, 0.231vw + 0.94rem, 1.125rem)" },
        $sm: { value: "0.875rem" },
      },
      fonts: {
        $sans: { value: "var(--font-generalSans)" },
        $serif: { value: "var(--font-denton)" },
      },
      spacing: {
        1: { value: "0.25rem" },
        2: { value: "0.5rem" },
        3: { value: "0.75rem" },
        4: { value: "1rem" },
        5: { value: "1.25rem" },
        6: { value: "1.5rem" },
        7: { value: "1.75rem" },
        8: { value: "2rem" },
        9: { value: "2.25rem" },
        10: { value: "2.5rem" },
        11: { value: "3rem" },
        12: { value: "3.5rem" },
        13: { value: "4rem" },
        14: { value: "4.5rem" },
        15: { value: "5rem" },
        16: { value: "7.5rem" },
        17: { value: "10rem" },
        18: { value: "12.5rem" },
        19: { value: "15rem" },
        20: { value: "20rem" },

        $h1: { value: "clamp(1rem, 0.5rem + 2.5vi, 2.5rem)" },
        $h2: { value: "clamp(1rem, 0.6667rem + 1.6667vi, 2rem)" },
        $h3: { value: "clamp(1rem, 0.8333rem + 0.8333vi, 1.5rem)" },
        $h4: { value: "clamp(1rem, 0.8333rem + 0.8333vi, 1.5rem)" },
        $h5: { value: "clamp(0.75rem, 0.6667rem + 0.4167vi, 1rem)" },
        $h6: { value: "clamp(1rem, 0.8333rem + 0.8333vi, 1.5rem)" },
        $p: { value: "clamp(1rem, 0.8333rem + 0.8333vi, 1.5rem)" },
      },
    },
    semanticTokens: {
      colors: {
        $background: {
          value: { base: "{colors.tan.2}", _dark: "{colors.tan.10}" },
        },
        $heading: {
          value: { base: "{colors.tan.10}", _dark: "{colors.tan.1}" },
        },
        $text: {
          value: { base: "{colors.tan.9}", _dark: "{colors.tan.2}" },
        },
        $hiContrast: {
          value: { base: "{colors.tan.10}", _dark: "{colors.tan.1}" },
        },
        $midContrast: {
          value: { base: "{colors.tan.9}", _dark: "{colors.tan.2}" },
        },
        $border: {
          value: { base: "{colors.tan.4}", _dark: "{colors.tan.6}" },
        },
      },
      spacing: {
        $xs: { value: "{spacing.2}" },
        $sm: { value: "{spacing.4}" },
        $md: { value: "{spacing.10}" },
        $lg: { value: "{spacing.14}" },
        $xl: { value: "{spacing.17}" },
      },
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },

  // Global CSS
  globalCss,

  // The output directory for your css system
  outdir: "styled-system",
});
