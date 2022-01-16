import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      heading: "'1089_display', serif",
      paragraph: "neuzeit-grotesk, sans-serif",
    },
    colors: {
      gray00: "#f4f4f4",
      gray20: "#e7e7e7",
      gray40: "#a6a6a6",
      gray60: "#606060",
      gray80: "#333333",
      gray100: "#111111",
      red00: "#fbf9f9",
      red20: "#f8f0ed",
      red40: "#f4d9cf",
      red60: "#f4b7a0",
      red80: "#e48865",
      red100: "#a4654e",
    },
    fontSizes: {
      0: "12px",
      1: "14px",
      2: "16px",
      3: "20px",
      4: "24px",
      5: "32px",
      6: "40px",
      7: "48px",
      8: "56px",
      9: "80px",
      10: "120px",
    },
    transitions: {
      transitionShort: "all 300ms cubic-bezier(0.49, 0.025, 0.49, 1)",
      transitionBase: "all 500ms cubic-bezier(0.49, 0.025, 0.49, 1)",
      transitionMedium: "all 800ms cubic-bezier(0.49, 0.025, 0.49, 1)",
      transitionLong: "all 1200ms cubic-bezier(0.49, 0.025, 0.49, 1)",
    },
  },
  media: {
    mediaxs: "(min-width: 480px)",
    mediaSm: "(min-width: 640px)",
    mediaMd: "(min-width: 768px)",
    mediaLg: "(min-width: 1024px)",
    mediaXl: "(min-width: 1440px)",
  },
});
