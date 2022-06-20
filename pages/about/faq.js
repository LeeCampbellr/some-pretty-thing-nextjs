import React, { useRef, useEffect } from "react"
import Image from "next/image"
import styled from "styled-components"
import { gsap } from "gsap"
import { gql } from "graphql-request"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import Line from "assets/elements/line-3.svg"
import FAQImage from "assets/faq.png"
import { Container, Section } from "@components/layout"
import { Heading } from "@components/type"
import CardQuestion from "@components/about/question"
import NavigationFAQ from "@components/about/faqSubmenu"

import { request } from "@data/craft"
import { media } from "@utils/media"

export async function getStaticProps() {
  const FAQ_QUERY = gql`
    query FaqPage {
      entry(uid: "fc42832b-7cd4-4935-b3e8-e126c250c61c") {
        title
        ... on frequentlyAskedQuestions_frequentlyAskedQuestions_Entry {
          id
          metaDescription
          metaImage {
            url
          }
          personalQuestions {
            ... on personalQuestions_question_BlockType {
              id
              q
              a
            }
          }
          gearQuestions {
            ... on gearQuestions_question_BlockType {
              id
              q
              a
            }
          }
          bloggingQuestions {
            ... on bloggingQuestions_question_BlockType {
              id
              q
              a
            }
          }
          beginningQuestions {
            ... on beginningQuestions_question_BlockType {
              id
              q
              a
            }
          }
        }
      }
    }
  `

  const data = await request({
    query: FAQ_QUERY,
  })

  return {
    props: { data },
  }
}

export default function FAQ({ data }) {
  const { entry } = data
  const headerParallax = useRef()

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
    gsap.fromTo(
      headerParallax.current,
      {
        y: "0%",
      },
      {
        scrollTrigger: {
          trigger: headerParallax.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.75,
          toggleActions: "play none none none",
        },
        y: "-20%",
      }
    )
  })

  return (
    <>
      <Page>
        <Section xl mgTop>
          <BackgroundLine />
          <Container grid containerLarge alignCenter>
            <ImageWrapper>
              <HeaderMask className="svg">
                <clipPath clipPathUnits="objectBoundingBox" id="header-mask">
                  <path d="M1 .755V.308C.996.137.774 0 .5 0S.004.137 0 .308v.447C0 .77.015.78.025.787.03.791.034.793.034.796.034.798.03.801.025.805.015.81 0 .82 0 .835V1h.436C.46 1 .476.991.486.985.492.982.496.979.5.979c.003 0 .008.003.014.006C.525.991.541 1 .564 1H1V.835C1 .82.985.81.975.803.97.799.966.797.966.794.966.792.97.789.975.785.985.78 1 .77 1 .755"></path>
                </clipPath>
              </HeaderMask>
              <HeaderImage>
                <HeaderParallax ref={headerParallax}>
                  <Image className="faq-parallax" src={FAQImage} alt="" />
                </HeaderParallax>
              </HeaderImage>
            </ImageWrapper>
            <Title>
              <Heading html="h1" level="huge" center>
                Pull up a seat, grab a coffee, Let’s chat.
              </Heading>
            </Title>
          </Container>
        </Section>
        <Section>
          <Questions grid lg containerLarge alignStart>
            <NavigationFAQ />
            <div>
              <Group name="beginning">
                <SectionTitle>
                  <Heading html="h6" level="sh">
                    01. From the Beginning
                  </Heading>
                </SectionTitle>
                {entry.beginningQuestions.map((question, index) => (
                  <CardQuestion question={question} key={index} />
                ))}
              </Group>
              <Group name="gear">
                <SectionTitle>
                  <Heading html="h6" level="sh">
                    02. Gear Guide
                  </Heading>
                </SectionTitle>
                {entry.gearQuestions.map((question, index) => (
                  <CardQuestion question={question} key={index} />
                ))}
              </Group>
              <Group name="personal">
                <SectionTitle>
                  <Heading html="h6" level="sh">
                    03: Let’s Get Personal
                  </Heading>
                </SectionTitle>
                {entry.personalQuestions.map((question, index) => (
                  <CardQuestion question={question} key={index} />
                ))}
              </Group>
              <Group name="blogging">
                <SectionTitle>
                  <Heading html="h6" level="sh">
                    04: Let’s Talk Blogging
                  </Heading>
                </SectionTitle>
                {entry.bloggingQuestions.map((question, index) => (
                  <CardQuestion question={question} key={index} />
                ))}
              </Group>
            </div>
          </Questions>
        </Section>
      </Page>
    </>
  )
}

const Page = styled.div`
  margin-top: var(--spacingMedium);

  ${media.sm`
    margin-top: 0;
  `}
`

const HeaderImage = styled.div`
  position: relative;
  clip-path: url(#header-mask);

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((8 / 5) * 100%);
  }
`

const HeaderParallax = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -10%;
  margin: 0 auto;
  width: 120%;
`

const HeaderMask = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
`

const Questions = styled(Container)`
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  ${media.sm`
    grid-template-columns: 320px 1fr;
  `}
`

const BackgroundLine = styled(Line)`
  bottom: 10%;
  left: 0;
  position: absolute;
  right: 0;
  width: 100vw;
  z-index: var(--zLost);
`

const ImageWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  margin: 0 auto;
  max-width: 560px;
  width: 60%;

  ${media.sm`
    width: 100%;

  `}
`

const Title = styled.div`
  grid-column: 1;
  grid-row: 1;
  margin-top: var(--spacingLarge);
  z-index: var(--zFront);
`

const Group = styled.div`
  padding-bottom: var(--spacingLarge);
`

const SectionTitle = styled.div`
  margin-bottom: 4rem;
`
