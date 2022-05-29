import React from "react"
import styled from "styled-components"

import { Heading } from "@components/type"
import { Container } from "@components/layout"
import { media } from "@utils/media"

const ContentIntroShop = ({ parts }) => {
  return (
    <IntroContainer containerLarge mg section grid id={parts.sectionId}>
      <Content dangerouslySetInnerHTML={{ __html: parts.paragraph }} />
      <Index>
        <Heading html="h6" level="sh">
          Shop This Outfit:
        </Heading>
        {parts.shopIndex.map((shop, index) => (
          <li key={index}>
            <a href={shop.link}>{shop.itemTitle}</a>
          </li>
        ))}
      </Index>
    </IntroContainer>
  )
}

export default ContentIntroShop

const IntroContainer = styled(Container)`
  grid-template-columns: 1fr;

  ${media.sm`
    grid-template-columns: 1fr 240px;
  `}
`

const Content = styled.div``

const Index = styled.ul`
  list-style: none !important;
  margin-bottom: 1rem;
  padding: 0 !important;

  h6 {
    color: var(--headingColor);
    margin-bottom: 1rem;
  }
`
