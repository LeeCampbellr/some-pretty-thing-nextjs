import React from "react"
import Image from "next/image"
import styled from "styled-components"

import { Heading } from "@components/type"
import { Container } from "@components/layout"
import { media } from "@utils/media"

const ContentIntroSponsored = ({ parts }) => {
  return (
    <IntroContainer containerLarge mg section grid id={parts.sectionId}>
      <Content dangerouslySetInnerHTML={{ __html: parts.paragraph }} />
      <Sponsored>
        <Heading html="h6" level="sh">
          {parts.sponsoredContent}
        </Heading>
        <Logo>
          <Image
            src={parts.sponsoredLogo[0].url}
            alt={parts.sponsoredLogo[0].title}
            width={parts.sponsoredLogo[0].width}
            height={parts.sponsoredLogo[0].height}
          />
        </Logo>
      </Sponsored>
    </IntroContainer>
  )
}

export default ContentIntroSponsored

const IntroContainer = styled(Container)`
  grid-template-columns: 1fr;

  ${media.sm`
    grid-template-columns: 1fr 240px;
  `}
`
const Content = styled.div``

const Sponsored = styled.div`
  h6 {
    color: var(--headingColor);
    margin-bottom: 1rem;
  }
`

const Logo = styled.div`
  background-color: var(--red20);
  padding: 1rem;

  img {
    margin: 0 auto;
    max-height: 56px;
  }
`
