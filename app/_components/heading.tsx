import React from "react";

import { cva } from "@/styled-system/css";

interface Props {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  align?: string;
  margin?: string;
}

export default function Heading({
  as: Element = "h1",
  children,
  ...props
}: Props) {
  return <Element className={heading({ ...props })}>{children}</Element>;
}

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
      0: { marginBottom: 0 },
      xs: { marginBottom: "$xs" },
      sm: { marginBottom: "$sm" },
      md: { marginBottom: "$md" },
      lg: { marginBottom: "$lg" },
      xl: { marginBottom: "$xl" },
    },
  },
});
