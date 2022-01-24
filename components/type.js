import React from "react"
import styled from "styled-components"
import { fluidSize } from "@utils/fluidSize"

export const HeadingWrapper = ({
  html,
  level,
  children,
  strong,
  noMargin,
  light,
  center,
  title,
  ...props
}) => {
  const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"]
  const safeHeading = html ? html.toLowerCase() : ""
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : "h1"

  return <Title {...props}>{children}</Title>
}

// HEADING STYLES
export const Heading = styled(HeadingWrapper)`
  color: ${(props) => {
    if (props.light) return "var(--red20)"
    if (props.level === "sh") return "var(--gray60)"
    else return "var(--headingColor)"
  }};
  font-family: ${(props) => {
    if (props.level === "h6") return "var(--paragraphFamily)"
    if (props.level === "sh") return "var(--paragraphFamily)"
    else return "var(--headingFamily)"
  }};
  font-weight: var(--headingWeight);
  letter-spacing: ${(props) => {
    if (props.strong) return "0px"
    if (props.level === "sh") return "2px"
    else return "var(--headingTracking)"
  }};
  line-height: var(--headingLeading);
  margin: ${(props) => {
    if (props.title) return "0 auto"
    if (props.center) return "0 auto"
    else return "0"
  }};
  max-width: ${(props) => {
    if (props.title) return "30rem"
    else return "initial"
  }};
  text-decoration: none;
  text-transform: ${(props) =>
    props.lowerCase ? "initial" : "var(--headingTransform)"};
  text-align: ${(props) => {
    if (props.center) return "center"
    else return "left"
  }};
  transition: var(--transitionBase);

  /* FLUID FONT SIZES */
  ${(props) => {
    switch (props.level) {
      case "huge":
        return fluidSize(8.5, 48, 200, "vw", "font-size")
      case "big":
        return (
          fluidSize(6, 40, 96, "vw", "font-size") +
          fluidSize(4, 16, 32, "vw", "margin-bottom")
        )
      case "h1":
        return (
          fluidSize(5, 40, 80, "vw", "font-size") +
          fluidSize(4, 16, 32, "vw", "margin-bottom")
        )
      case "h2":
        return (
          fluidSize(3.5, 32, 48, "vw", "font-size") +
          fluidSize(4, 16, 24, "vw", "margin-bottom")
        )
      case "h3":
        return (
          fluidSize(3, 24, 32, "vw", "font-size") +
          fluidSize(4, 16, 24, "vw", "margin-bottom")
        )
      case "h4":
        return (
          fluidSize(2.5, 20, 24, "vw", "font-size") +
          fluidSize(4, 12, 16, "vw", "margin-bottom")
        )
      case "h5":
        return (
          fluidSize(2, 18, 20, "vw", "font-size") +
          fluidSize(4, 8, 12, "vw", "margin-bottom")
        )
      case "h6":
        return (
          fluidSize(2, 16, 18, "vw", "font-size") +
          fluidSize(4, 8, 12, "vw", "margin-bottom")
        )
      case "p":
        return "font-size: 1rem;"
      case "sh":
        return "font-size: 0.875rem;"
      default:
        return (
          fluidSize(5, 16, 24, "vw", "font-size") +
          fluidSize(4, 12, 16, "vw", "margin-bottom")
        )
    }
  }}
  ${(props) =>
    props.noMargin
      ? "margin-bottom: 0!important;"
      : props.intro
      ? "margin-bottom: 2.5rem"
      : null}
`

const Content = ({ level, children, noMargin, ...props }) => {
  return <p {...props}>{children}</p>
}

export const Paragraph = styled(Content)`
  color: var(--paragraphColor);
  font-family: var(--paragraphFamily);
  font-weight: var(--paragraphWeight);
  line-height: var(--paragraphLeading);
  text-align: ${(props) => {
    if (props.center) return "center"
    else return "left"
  }};
  /* FLUID FONT SIZES */
  ${(props) => {
    switch (props.level) {
      case "xl":
        return (
          fluidSize(2, 24, 32, "vw", "font-size") +
          fluidSize(3, 24, 32, "vw", "margin-bottom")
        )
      case "lg":
        return (
          fluidSize(2, 16, 20, "vw", "font-size") +
          fluidSize(3, 16, 24, "vw", "margin-bottom")
        )
      case "md":
        return (
          fluidSize(2, 16, 18, "vw", "font-size") +
          fluidSize(3, 16, 24, "vw", "margin-bottom")
        )
      case "sm":
        return (
          fluidSize(2, 14, 16, "vw", "font-size") +
          fluidSize(3, 12, 16, "vw", "margin-bottom")
        )
      default:
        return (
          fluidSize(2, 16, 16, "vw", "font-size") +
          fluidSize(3, 16, 24, "vw", "margin-bottom")
        )
    }
  }}
  ${(props) => {
    if (props.noMargin) return "margin: 0!important;"
  }}
`
