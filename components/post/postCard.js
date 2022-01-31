import React from "react"
import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

import InfoPost from "@components/post/postInfo"
import { Heading, Paragraph } from "@components/type"
import { media } from "@utils/media"

const Post = ({ post, sm, lg, split, ...props }) => {
  return (
    <article {...props}>
      <Link href={`/${post.slug}`}>
        <Card>
          <ImageWrapper>
            {post.featuredImage && (
              <Image
                loading="lazy"
                layout="fill"
                objectFit="cover"
                src={post.featuredImage[0].url}
                alt={post.featuredImage[0].title}
              />
            )}
          </ImageWrapper>
          <Content>
            <InfoPost date={post.postDate} categories={post.categories} />
            <Heading html="h2" level="h2">
              {post.title}
            </Heading>
            {post.excerpt && <Paragraph level="md">{post.excerpt}</Paragraph>}
          </Content>
        </Card>
      </Link>
    </article>
  )
}

const Card = styled.a`
  display: flex;
  cursor: pointer;
`

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 2rem;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 75%;
  }

  img {
    transition: var(--transitionLong);
  }

  &:hover {
    img {
      transform: scale(1.075);
    }
  }
`

const Content = styled.div``

const CardPost = styled(Post)`
  margin-bottom: ${(props) =>
    props.lg ? "var(--spacingMedium)" : props.md ? "var(--spacingSmall)" : "0"};

  &:last-of-type {
    margin-bottom: 0;
  }

  :nth-of-type(even) {
    ${Card} {
      flex-direction: column;

      ${media.md`
      flex-direction: ${(props) => (props.split ? "row-reverse" : "column")};
      `}
    }
  }

  ${Card} {
    align-items: ${(props) => (props.split ? "center" : "initial")};
    flex-direction: column;

    ${media.md`
      flex-direction: ${(props) => (props.split ? "row" : "column")};
    `}

    ${ImageWrapper}, ${Content} {
      ${media.md`
        flex: ${(props) => (props.split ? "0 0 50%" : "0 0 100%")};
      `}
    }

    ${Content} {
      ${media.md`
        padding: ${(props) => (props.split ? "var(--spacingLarge)" : "0")};
      `}
    }
  }
`

export default CardPost
