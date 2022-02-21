import React from "react"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

import { Section, Container } from "@components/layout"
import { LinkSection } from "@components/links"
import CardPost from "@components/post/postCard"
import { Heading } from "@components/type"
import { media } from "@utils/media"

import FeaturedLogo from "assets/indexHome/framebridge--logo.png"
import FeaturedImage from "assets/indexHome/framebridge--photo.png"

const SectionHome = ({ posts }) => {
  return (
    <Section lgTop full>
      <Container sm section>
        <Heading html="h2" level="h3" center title>
          The Riverwood Cape Home
        </Heading>
      </Container>

      <Home grid lg section>
        <Link href="/customizing-our-dining-room-with-framebridge">
          <Content>
            <Logo>
              <Image src={FeaturedLogo} width="160px" height="16px" />
            </Logo>
            <ImageWrapper>
              <Image src={FeaturedImage} objectFit="cover" layout="fill" />
            </ImageWrapper>
            <Heading html="h4" level="h3" center>
              Customizing our Dining Room with Framebridge
            </Heading>
            <Heading html="h6" level="sh" center noMargin>
              Read More
            </Heading>
          </Content>
        </Link>

        <Posts>
          {posts.map((post, index) => (
            <CardPost post={post} key={index} lg />
          ))}
        </Posts>
      </Home>

      <LinkSection link="/home" text="All Home Posts" />
    </Section>
  )
}

export default SectionHome

const Home = styled(Container)`
  text-align: center;
  grid-template-columns: 1fr;

  ${media.sm`
    grid-template-columns: 1fr 2fr;
  `}
`
const Posts = styled.div`
  ${media.sm`
    grid-column: 2;
    grid-row: 1;
  `}
`

const Logo = styled.div`
  margin: 0 auto;
  margin-bottom: var(--spacingXSmall);
  max-width: 160px;
`

const ImageWrapper = styled.div`
  margin-bottom: var(--spacingXSmall);
  flex: 1 0 60%;
  transition: var(--transitionLong);
  position: relative;
  height: 100%;
  width: 100%;
  img {
    transition: var(--transitionLong) !important;
  }
`

const Content = styled.a`
  align-items: center;
  background-color: var(--red20);
  display: flex;
  flex-direction: column;
  padding: var(--spacingSmall);
  height: calc(100vh - 8rem);

  ${media.sm`
    align-self: start;
    grid-column: 1;
    grid-row: 1;
    left: 0;
    position: sticky;
    top: 5rem;
  `}

  &:hover {
    ${ImageWrapper} {
      transform: scale(0.95);

      img {
        transform: scale(1.15);
      }
    }
  }
`
