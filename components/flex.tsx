import { styled } from "@/styled-system/jsx";

export default function Flex({ children }: { children: React.DOMElement }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled("div", {
  base: {
    display: "flex",
  },

  variants: {
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
      rowReverse: { flexDirection: "row-reverse" },
      columnReverse: { flexDirection: "column-reverse" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      end: { justifyContent: "flex-end" },
      center: { justifyContent: "center" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
    },
    align: {
      start: { alignItems: "flex-start" },
      end: { alignItems: "flex-end" },
      center: { alignItems: "center" },
      stretch: { alignItems: "stretch" },
    },
    wrap: {
      wrap: { flexWrap: "wrap" },
      nowrap: { flexWrap: "nowrap" },
    },
    gap: {
      xs: { gap: "$xs" },
      sm: { gap: "$sm" },
      md: { gap: "$md" },
      lg: { gap: "$lg" },
      xl: { gap: "$xl" },
    },
    width: {
      full: { width: "100%" },
      auto: { width: "auto" },
    },
  },
});
