import React from "react"
import styled from "styled-components"

import Date from "@utils/date"
import { fluidSize } from "@utils/fluidSize"

const InfoPost = ({ categories, date, center, light }) => {
  return (
    <PostInfoWrapper centered={center}>
      {categories && (
        <React.Fragment>
          {categories.map((categories, index) => (
            <Category bright={light} key={index}>
              {(index ? ", " : "") + categories.title}
            </Category>
          ))}
        </React.Fragment>
      )}
      <Info bright={light}>&nbsp;&nbsp;|&nbsp;&nbsp;</Info>
      <DateWrapper bright={light}>
        <Date date={date} />
      </DateWrapper>
    </PostInfoWrapper>
  )
}

export default InfoPost

const PostInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => {
    if (props.centered) return "center"
    else return "flex-start"
  }};
  ${fluidSize(3, 16, 24, "vw", "margin-bottom")}
`

const Info = styled.span`
  color: ${(props) => {
    if (props.bright) return "var(--gray40)"
    else return "var(--gray60)"
  }};
  font-family: var(--paragraphFamily);
  ${fluidSize(4, 12, 14, "vw", "font-size")}
`

const DateWrapper = styled(Info)`
  text-transform: initial;
`

const Category = styled(Info)`
  text-transform: uppercase;
  letter-spacing: 2px;
`
