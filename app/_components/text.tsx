import { cva } from "@/styled-system/css";

const text = cva({
  base: {
    color: "$midContrast",
    fontFamily: "var(--font-denton)",
    fontVariationSettings: "'opsz' 10, 'wdth' 480, 'wght' 180",
    fontSize: "$p",

    "& a": {
      color: "$midContrast",
      textDecoration: "underline",
      transition: "$transitionShort",
    },

    "& ul": {
      listStyle: "disc",

      "& li": {
        marginBottom: "$1",
      },
    },
  },

  variants: {
    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
      justify: { textAlign: "justify" },
    },
    margin: {
      none: { marginBottom: 0, "& p, & a, & span": { marginBottom: 0 } },
      xs: { marginBottom: "$xs", "& p, & a, & span": { marginBottom: "$xs" } },
      sm: { marginBottom: "$sm" },
      md: { marginBottom: "$md" },
      lg: { marginBottom: "$lg" },
      xl: { marginBottom: "$xl" },
    },
    size: {
      sm: {
        fontSize: "$sm",
        "& p, & a, & span": { fontSize: "$sm" },
      },
    },
  },
});

interface Props {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  content?: string;
  margin?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
  size?: "sm";
}

export default function Text({
  as: Element = "p",
  content,
  children,
  margin,
  align,
  size,
  ...props
}: Props) {
  return content ? (
    <Element
      className={text({ margin, align, size, ...props })}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  ) : (
    <Element className={text({ margin, align, size, ...props })}>
      {children}
    </Element>
  );
}
