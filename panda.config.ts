import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // presets: [],
  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        primary: { value: "#ff0000" },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
