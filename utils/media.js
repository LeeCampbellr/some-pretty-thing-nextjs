import { css } from "styled-components"

const breakpoints = {
  xs: "480px",
  sm: "880px",
  md: "1200px",
  lg: "1440px",
  xl: "1680px",
}

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
