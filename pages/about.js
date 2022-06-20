import React from "react"
import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import { gql } from "graphql-request"

import { request } from "@data/craft"
import { Container, Section } from "@components/layout"
import { Heading, Paragraph } from "@components/type"
import Header from "@components/sections/aboutHeader"
import Interview from "@components/sections/aboutInterview"
import Contact from "@components/sections/contact"
import { media } from "@utils/media"

import BeginningImage from "public/images/about/beginning.jpg"
import ContentImage from "public/images/about/content.jpg"

export async function getStaticProps() {
  const ABOUT_QUERY = gql`
    query AboutPage {
      about: entry(slug: "about") {
        ... on about_about_Entry {
          id
          slug
          title
          metaTags {
            title
          }
          metaImage {
            url
          }
          metaDescription
        }
      }
    }
  `

  const data = await request({
    query: ABOUT_QUERY,
  })

  return {
    props: { data },
  }
}

export default function About({ data }) {
  return (
    <React.Fragment>
      <Header />

      <Section xl>
        <IntroContainer containerLarge grid gridTwo>
          <Paragraph level="lg">
            Every time I write a blog post, take a photograph, design a
            Pinterest pin it’s a reminder that community exists and creativity
            thrives when time and effort are dedicated to something worthwhile.
            I’ve lived my life by the mantra that “good work never goes
            unnoticed” and have wholly embraced that philosophy for this little
            digital space of mine. I hope you enjoy it.
          </Paragraph>
          <Paragraph level="lg">
            I hope some of my words challenge you and some of my photographs
            strike an emotion in you. I hope you walk away inspired or uplifted.
            I hope you see Christ woven throughout the narrative because nothing
            I do is possible without Him. But no matter what you see or feel,
            know that this space is for me just as much as you and I work hard
            every day to create something of which I’m proud of.
          </Paragraph>
        </IntroContainer>
      </Section>

      <Interview />

      <Section xl>
        <Container containerLarge grid gridTwo alignCenter>
          <ImageWrapper>
            <Image src={BeginningImage} width="1260" height="1890" />
          </ImageWrapper>
          <ContentWrapper>
            <Heading html="h6" level="sh" intro>
              From the Beginning
            </Heading>
            <Heading html="h2" level="h2">
              The start of it all
            </Heading>
            <Paragraph level="md">
              I've been an avid reader of blogs for the past 10 years and would
              spend hours soaking in content created by women just like me.
              After a few years of reading I thought, why can’t I do it too?
              Shortly after Some Pretty Thing got its start and it quickly
              became so much more than a hobby.
            </Paragraph>
          </ContentWrapper>
        </Container>
      </Section>

      <Section xl>
        <Container containerLarge grid gridTwo layout="imageRight" alignCenter>
          <ImageWrapper>
            <Image src={ContentImage} width="1260" height="1890" />
          </ImageWrapper>
          <ContentWrapper>
            <Heading html="h6" level="sh" intro>
              What it’s all about
            </Heading>
            <Heading html="h2" level="h2">
              Content with purpose
            </Heading>
            <Paragraph level="md">
              Like any good digital journal, my interests, passions, and
              convictions are written into the words and documented through
              photographs. Naturally, they ebb and flow but the underlying
              purpose remains the same: inspire and educate.
            </Paragraph>
          </ContentWrapper>
        </Container>
      </Section>

      <Contact />
    </React.Fragment>
  )
}

const ImageWrapper = styled.div`
  background-color: var(--red00);
  padding: var(--spacingMedium);
`

const ContentWrapper = styled.div`
  padding: var(--spacingMedium);
`

const IntroContainer = styled(Container)`
  gap: 0.25rem;

  ${media.sm`
    gap: var(--spacingGutter);
  `}
`
