import React from "react";

import { cva } from "@/styled-system/css";

interface Props {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export default function Heading({ as: Element = "h1", children }) {
  return <Element className={heading()}>{children}</Element>;
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
  },
});
