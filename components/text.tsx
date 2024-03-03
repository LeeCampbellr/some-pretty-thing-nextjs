import { cva } from "@/styled-system/css";

interface Props {
  content?: string;
  children?: React.ReactNode;
}

export default function Text({ as: Element = "p", content, children }: Props) {
  return content ? (
    <Element dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <Element>{children}</Element>
  );
}

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
      0: { marginBottom: 0, "& p, & a, & span": { marginBottom: 0 } },
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
