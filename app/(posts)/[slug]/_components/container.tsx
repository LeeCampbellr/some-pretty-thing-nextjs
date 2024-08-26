import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

const containerStyles = cva({
  base: {
    margin: "0 auto",
    position: "relative",
    width: "100%",
  },
  variants: {
    align: {
      around: { alignItems: "space-around" },
      between: { alignItems: "space-between" },
      center: { alignItems: "center" },
      start: { alignItems: "flex-start" },
      end: { alignItems: "flex-end" },
      top: { alignItems: "start" },
      bottom: { alignItems: "end" },
    },
    display: {
      flex: { display: "flex" },
      block: { display: "block" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
    },
    size: {
      sm: { maxWidth: "40rem" },
      md: { maxWidth: "60rem" },
      lg: { maxWidth: "80rem" },
      xl: { maxWidth: "100rem" },
    },
  },
});

export const Container = styled("div", containerStyles);
