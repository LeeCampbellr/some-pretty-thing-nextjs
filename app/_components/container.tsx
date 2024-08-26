import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

const containerStyles = cva({
  base: {
    width: "100%",
    maxWidth: "92.5rem",
    margin: "0 auto",
    padding: "0 clamp(1rem, 7.39vw + -0.912rem, 5rem)",
  },

  variants: {
    variant: {
      header: {
        padding:
          "clamp(5rem, 0rem + 15vi, 15rem) clamp(1rem, 7.39vw + -0.912rem, 5rem) clamp(5rem, 0rem + 10vi, 6rem)",
      },
      section: {
        padding:
          "clamp(2.5rem, 0rem + 12.5vi, 10rem) clamp(1rem, 7.39vw + -0.912rem, 5rem)",
        borderBottom: "1px solid",
        borderBottomColor: "$border",

        _last: {
          borderBottom: "none",
        },
      },
    },
    size: {
      sm: { maxWidth: "40rem" },
      md: { maxWidth: "60rem" },
      lg: { maxWidth: "80rem" },
      xl: { maxWidth: "100rem" },
    },
    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
    },
  },
});

const Container = styled("div", containerStyles);

export default Container;
