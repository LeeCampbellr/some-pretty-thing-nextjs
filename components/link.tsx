import NextLink from "next/link";

import { styled } from "@/styled-system/jsx";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function Link({ children, href }: Props) {
  return <StyledLink href={href}>{children}</StyledLink>;
}

const StyledLink = styled(NextLink, {
  base: {
    color: "$midContrast",
    fontFamily: "$sans",
    fontSize: "$h6",
    fontVariationSettings: "'opsz' 1, 'wdth' 100, 'wght' 400",
    lineHeight: "1",
    textTransform: "uppercase",
    letterSpacing: "0.125em",
    position: "relative",
    padding: "0.5rem 0",

    _after: {
      content: "''",
      position: "absolute",
      bottom: "0",
      bg: "$midContrast",
      height: "1px",
      width: "100%",
      transform: "scale(0.5)",
      transformOrigin: "left center",
      left: "0",
      transition: "transform 500ms ease-in-out",
    },

    _hover: {
      color: "$hiContrast",

      _after: {
        transform: "scale(1)",
      },
    },
  },
});
