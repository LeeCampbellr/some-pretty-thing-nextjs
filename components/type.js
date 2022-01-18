import React from "react"

import { styled } from "stitches.config"

export const TypeWrapper = ({ html, level, children, ...props }) => {
  const validTypeLevels = ["h1", "h2", "h3", "h4", "h5", "h6", "p"]
  const safeType = html ? html.toLowerCase() : ""
  const Text = validTypeLevels.includes(safeType) ? safeType : "p"

  return <Text {...props}>{children}</Text>
}

export const Type = styled(TypeWrapper, {
  fontWeight: "400",
  textDecoration: "none",
  transition: "$transitionBase",

  variants: {
    size: {
      h1: {
        fontSize: "4rem",
        lineHeight: "100%",
        color: "$gray100",
        textTransform: "uppercase",
        fontFamily: "$heading",
        marginBottom: "2rem",
      },
      h2: {
        fontSize: "3rem",
        lineHeight: "100%",
        color: "$gray100",
        textTransform: "uppercase",
        fontFamily: "$heading",
        marginBottom: "1.5rem",
      },
      h3: {
        fontSize: "2rem",
        lineHeight: "100%",
        color: "$gray100",
        textTransform: "uppercase",
        fontFamily: "$heading",
        marginBottom: "1.5rem",
      },
      h4: {
        fontSize: "1rem",
        lineHeight: "100%",
        color: "$gray100",
        textTransform: "uppercase",
        fontFamily: "$heading",
        marginBottom: "1rem",
      },
      h5: {
        fontSize: "0.875rem",
        lineHeight: "100%",
        color: "$gray100",
        textTransform: "uppercase",
        fontFamily: "$heading",
        marginBottom: "0.75rem",
      },
      h6: {
        fontSize: "1rem",
        lineHeight: "100%",
        color: "$gray100",
        fontFamily: "$paragraph",
      },
      sh: {
        fontSize: "0.75rem",
        lineHeight: "100%",
        color: "$gray60",
        textTransform: "uppercase",
        fontFamily: "$paragraph",
        marginBottom: "1rem",
        letterSpacing: "1.5px",
      },
      p: {
        fontSize: "1rem",
        lineHeight: "135%",
        color: "$gray80",
        textTransform: "none",
        fontFamily: "$paragraph",
      },
    },
    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
    },
    light: {
      true: { color: "$red20" },
    },
    noMargin: {
      true: { marginBottom: "0" },
    },
  },

  defaultVariants: {
    size: "h4",
    align: "left",
  },
})
