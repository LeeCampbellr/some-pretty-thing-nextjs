import { styled } from "stitches.config"

export const Section = styled("section", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "var(--spacingSection)",
  position: "relative",
  width: "100%",
  marginBottom: "var(--spacingMedium)",

  variants: {
    border: {
      true: { borderBottom: "1px solid $gray20" },
    },
    background: {
      true: { backgroundColor: "$red20" },
    },
  },
})
