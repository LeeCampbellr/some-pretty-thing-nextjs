import React from "react"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"

import { Heading, Paragraph } from "@components/type"
import InfoPost from "@components/post/postInfo"
import { LinkArrow } from "@components/links"
import Date from "@utils/date"
import { media } from "@utils/media"

const SectionHeader = ({ post }) => {
  const featured = post.homeHeaderLayout === "featured" ? true : false

  return (
    <header>
      <Link href={`/${post.slug}`}>
        <Header className={`-${post.homeHeaderLayout}`}>
          <ImageWrapper>
            <Image
              src={post.featuredImage[0].url}
              alt={post.featuredImage[0].title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </ImageWrapper>
          <Content>
            <InfoPost
              date={post.postDate}
              categories={post.categories}
              center={featured}
              light={featured}
            />
            <Heading html="h1" level="h1">
              {post.title}
            </Heading>
            {post.excerpt && <Paragraph level="lg">{post.excerpt}</Paragraph>}
            <LinkArrow text="Read Post" light={featured} />
          </Content>
        </Header>
      </Link>
    </header>
  )
}

export default SectionHeader

const ImageWrapper = styled.div`
  position: relative;
  grid-row: 1;
  width: 100%;
  height: 100%;

  ${media.sm`
    grid-column: 2;
    margin-top: 0;
  `}
`

const Content = styled.div`
  grid-row: 2;
  padding: var(--spacingMedium);
  width: 100%;
  z-index: var(--zFront);

  ${media.sm`
    grid-column: 1;
    grid-row: 1;
  `}
`

const Header = styled.a`
  align-items: center;
  border-bottom: var(--borderBase);
  cursor: pointer;
  display: grid;
  gap: var(--spacingGutter);
  min-height: 95vh;
  margin-bottom: var(--spacingLarge);
  margin-top: var(--spacingLarge);
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 1fr);

  ${media.sm`
    margin-top: 0;
    max-height: 95vh;
  `}

  &.-base {
    ${media.sm`
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    `}
  }

  &.-featured {
    max-height: 1000px;

    h1 {
      color: white;
      text-align: center;
    }

    p {
      color: var(--gray20);
      text-align: center;
    }

    ${Content} {
      grid-column: 1;
      grid-row: 1;
      text-align: center;
    }

    ${ImageWrapper} {
      grid-column: 1;
      grid-row: 1;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`
