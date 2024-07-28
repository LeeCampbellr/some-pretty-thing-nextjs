import React from "react";

import { cva } from "@/styled-system/css";

const heading = cva({
  base: {
    display: "block",
  },
  variants: {
    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
    },
    margin: {
      none: { marginBottom: 0 },
      xs: { marginBottom: "$xs" },
      sm: { marginBottom: "$sm" },
      md: { marginBottom: "$md" },
      lg: { marginBottom: "$lg" },
      xl: { marginBottom: "$xl" },
    },
  },
});

interface Props {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
  margin?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
}

export default function Heading({
  as: Element = "h1",
  children,
  align,
  margin,
  ...props
}: Props) {
  return (
    <Element className={heading({ align, margin, ...props })}>
      {children}
    </Element>
  );
}
