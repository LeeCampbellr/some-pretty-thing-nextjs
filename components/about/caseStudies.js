import React from "react"
import Link from "next/link"
import styled from "styled-components"

import { Container, Section } from "@components/layout"
import { Heading, Paragraph } from "@components/type"
import { media } from "@utils/media"

const CaseStudies = ({ entries }) => {
  return (
    <Section xl full>
      <CaseStudiesContainer grid>
        {entries.map((entry, index) => (
          <Link key={index} href={entry.post[0].slug} passHref>
            <CaseStudy>
              <Number level="lg" noMargin>
                0{entry.sortOrder}
              </Number>
              <Brand html="h2" level="h1" noMargin>
                {entry.brand}
              </Brand>
              <Line />
              <Post level="lg" noMargin>
                {entry.post[0].title}
              </Post>
            </CaseStudy>
          </Link>
        ))}
      </CaseStudiesContainer>
    </Section>
  )
}

const Number = styled(Paragraph)`
  flex: 1 0 40px;
  margin-right: var(--spacingSmall);
  margin-left: var(--spacingXSmall);

  ${media.sm`
    flex: 1 0 64px;
  `}
`

const Brand = styled(Heading)`
  flex: 1 0 auto;
  transition: var(--transitionBase);
  text-align: center;

  ${media.sm`
    text-align: left;
  `}
`

const Line = styled.div`
  background-color: var(--gray20);
  flex: 0 1 100%;
  height: 2px;
  margin: 0 var(--spacingSmall);
  transition: var(--transitionBase);
`

const Post = styled(Paragraph)`
  flex: 1 0 auto;
  transition: var(--transitionBase);
  text-align: center;

  ${media.sm`
    text-align: left;
  `}
`

const CaseStudiesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`

const CaseStudy = styled("a")`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacingXLarge);
  max-width: 100%;
  padding: 0 var(--spacingSmall);
  text-align: center;
  transform: center right;
  transition: var(--transitionBase);
  width: 100%;

  ${media.sm`
    flex-direction: row;
    margin-bottom: var(--spacingMarge);
    padding: 0 var(--spacingLarge);
    text-align: left;
  `}

  &:hover {
    ${media.sm`
      max-width: 95%;
    `}

    ${Brand} {
      color: var(--red80);
    }

    ${Post} {
      color: var(--red80);
    }

    ${Number} {
      color: var(--red80);
    }

    ${Line} {
      background-color: var(--red80);
    }
  }
`

export default CaseStudies
