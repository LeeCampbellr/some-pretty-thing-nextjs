import { styled } from "@/styled-system/jsx";

export default function Container({
  children,
  ...props
}: {
  children: React.DOMElement;
}) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled("div", {
  base: {
    maxWidth: "92.5rem",
    margin: "0 auto",
    padding: "0 clamp(1rem, 7.39vw + -0.912rem, 5rem)",
  },

  variants: {
    variant: {
      section: {
        padding:
          "clamp(2.5rem, 0rem + 12.5vi, 10rem) clamp(1rem, 7.39vw + -0.912rem, 5rem)",
        borderBottom: "1px solid",
        borderBottomColor: "$border",
      },
    },
  },
});
