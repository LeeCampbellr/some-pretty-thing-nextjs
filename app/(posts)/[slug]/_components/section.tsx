import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

const sectionStyles = cva({
  base: {
    padding: "clamp(2.5rem, 0rem + 4vi, 5rem) 0",
  },
});

export const Section = styled("section", sectionStyles);
