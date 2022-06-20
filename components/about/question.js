import React from "react"
import styled from "styled-components"

import { Heading } from "@components/type"
import { media } from "@utils/media"

const Question = ({ question }) => {
  return (
    <Card>
      <Title>
        <Heading html="h1" level="h2">
          {question.q}
        </Heading>
      </Title>
      <Answer dangerouslySetInnerHTML={{ __html: question.a }}></Answer>
    </Card>
  )
}

export default Question

const Card = styled.div`
  position: relative;
  padding-bottom: var(--spacingMedium);

  &:last-of-type {
    padding-bottom: 0;
  }
`

const Before = styled.div`
  position: relative;

  &:before {
    color: var(--red20);
    font-family: var(--headingFamily);
    font-size: 12.5vw;
    font-weight: var(--headingWeight);
    left: -2rem;
    line-height: 100%;
    position: absolute;
    top: -1rem;
    z-index: -1;

    ${media.xs`
      font-size: 6vw;
    `}

    ${media.sm`
      font-size: 5vw;
    `}
  }
`

const Title = styled(Before)`
  &:before {
    content: "Q";
  }
`

const Answer = styled(Before)`
  &:before {
    content: "A";
  }
`
