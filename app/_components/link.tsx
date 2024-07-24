import { styled } from "@/styled-system/jsx";

interface Props {
  children: React.ReactNode;
}

export default function Link({ children, ...props }: Props) {
  return <StyledLink {...props}>{children}</StyledLink>;
}

const StyledLink = styled("span", {
  base: {
    color: "$midContrast",
    cursor: "pointer",
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
      transition: "transform 500ms ease-in-out",
    },

    _hover: {
      color: "$hiContrast",

      _after: {
        transform: "scale(1)",
      },
    },
  },

  variants: {
    align: {
      left: {
        _after: {
          left: "0",
          transformOrigin: "left center",
        },
      },
      center: {
        _after: {
          left: "0",
          right: "0",
          transformOrigin: "center",
        },
      },
      right: {
        _after: {
          right: "0",
          transformOrigin: "right center",
        },
      },
    },
  },

  defaultVariants: {
    align: "left",
  },
});
