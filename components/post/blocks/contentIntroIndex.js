import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

import { Heading } from "@components/type"
import { Container } from "@components/layout"
import { media } from "@utils/media"

const ContentIntroIndex = ({ parts }) => {
  return (
    <IntroContainer section containerLarge grid mg>
      <Content dangerouslySetInnerHTML={{ __html: parts.paragraph }} />
      <Index>
        <Heading html="h6" level="sh">
          This Post:
        </Heading>
        {parts.sections.map((section, index) => (
          <li key={index}>
            <LinkIndex to={section.sectionId} smooth={true} offset={-200}>
              {section.title}
            </LinkIndex>
          </li>
        ))}
      </Index>
    </IntroContainer>
  )
}

export default ContentIntroIndex

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

const LinkIndex = styled(Link)``
