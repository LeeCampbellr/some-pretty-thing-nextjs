import Link from "next/link"
import React from "react"

import { Type } from "@components/type"
import { styled } from "stitches.config"

export const Button = styled("button", {
  appearance: "none",
  backgroundColor: "$red40",
  border: "none",
  color: "$gray20",
  padding: "0.5rem 2rem",
  fontFamily: "$paragraph",
  fontSize: "0.875rem",
  letterSpacing: "2px",
  outline: "none",
  textAlign: "center",
  textTransform: "uppercase",
  transition: "$transitionBase",
  width: "auto",

  "&:hover": {
    backgroundColor: "$red60",
    filter: "brightness(105%)",
  },

  "&:focus": {
    outline: "none",
  },
})

export const TextLink = styled("a", {
  color: "$gray100",
  display: "inline-block",
  fontFamily: "$paragraph",
  fontSize: "1rem",
  fontWeight: "400",
  position: "relative",
})

const Arrow = ({ text, ...props }) => {
  return (
    <div {...props}>
      <Type html="h6" size="sh" noMargin>
        {text}
      </Type>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="10"
        fill="none"
        viewBox="0 0 24 10"
      >
        <path
          stroke="#111"
          d="M0 5.026h24m0 0c-3.5-.571-7-1.74-9-4.026m9 4.026c-3.5.572-7 1.688-9 3.974"
        />
      </svg>
    </div>
  )
}

export const LinkArrow = styled(Arrow, {
  alignItems: "center",
  display: "inline-flex",
  flexDirection: "",
  marginTop: "1rem",
  position: "relative",
  transition: "$transitionBase",

  "&:before": {
    background: "$red20",
    borderRadius: "2rem",
    bottom: 0,
    top: 0,
    right: "-0.4rem",
    content: " ",
    height: "1.5rem",
    width: "1.5rem",
    margin: "auto",
    position: "absolute",
    transform: "scale(0)",
    transition: "$transitionBase",
    zIndex: 1,
  },

  svg: {
    position: "relative",
    display: "inline-block",
    marginLeft: "0.675rem",
    zIndex: 2,

    path: {
      stroke: "$gray100",
      transition: "$transitionBase",
    },
  },

  "&:hover": {
    "&:before": { transform: "scale(1)" },
  },
})

const Section = ({ to, text, ...props }) => {
  return (
    <Link href={to}>
      <a {...props}>
        <Background />
        <Type html="h6" size="h6" noMargin>
          {text}
        </Type>
        <svg width="24" height="10" fill="none" viewBox="0 0 24 10">
          <path d="M0 5.026h24m0 0c-3.5-.571-7-1.74-9-4.026m9 4.026c-3.5.572-7 1.688-9 3.974" />
        </svg>
      </a>
    </Link>
  )
}

const Background = styled("div", {
  backgroundColor: "$red20",
  bottom: 0,
  left: 0,
  height: "100%",
  width: "100%",
  position: "absolute",
  transform: "scaleY(0)",
  transformOrigin: "bottom",
  transition: "$transitionBase",
  zIndex: "-1",
})

export const LinkSection = styled(Section, {
  alignItems: "center",
  borderBottom: "1px solid $gray20",
  display: "flex",
  flexDirection: "row",
  height: "5rem",
  justifyContent: "center",
  position: "relative",
  transition: "$transitionBase",
  width: "100%",

  svg: {
    marginLeft: "1rem",
  },

  path: {
    stroke: "$gray60",
    transition: "$transitionBase",
  },

  "&:hover": {
    borderColor: "$red20",

    path: {
      stroke: "$gray100",
    },

    [`${Background}`]: {
      transform: "scaleY(1)",
    },
  },
})
