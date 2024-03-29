import React from "react"
import Image from "next/image"
import styled from "styled-components"

import InfoPost from "@components/post/postInfo"
import { Heading } from "@components/type"
import { media } from "@utils/media"
import { fluidSize } from "@utils/fluidSize"

export default function PostHeader({ postHeader }) {
  return (
    <Header className={`-${postHeader.headerLayout}`}>
      <ImageWrapper>
        <Image
          src={postHeader.featuredImage[0].url}
          alt={postHeader.featuredImage[0].title}
          width={postHeader.featuredImage[0].width}
          height={postHeader.featuredImage[0].height}
          layout={postHeader.headerLayout === "featured" ? "fill" : "intrinsic"}
          priority
        />
      </ImageWrapper>
      <Content>
        <InfoPost
          light={postHeader.headerLayout === "featured" ? true : false}
          center={
            postHeader.headerLayout === "featured"
              ? true
              : postHeader.headerLayout === "editorial"
              ? true
              : false
          }
          categories={postHeader.categories}
          date={postHeader.postDate}
        />
        <Heading
          html="h1"
          level={
            postHeader.headerFontSize === "sm"
              ? "h1"
              : postHeader.headerFontSize === "md"
              ? "big"
              : postHeader.headerFontSize === "lg"
              ? "huge"
              : "big"
          }
        >
          {postHeader.title}
        </Heading>
      </Content>
    </Header>
  )
}

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  span {
    width: 100% !important;
  }
  img {
    height: 100% !important;
    max-height: initial !important;
    object-fit: cover;
    width: 100% !important;
    max-width: initial !important;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: var(--spacingSmall);
  }
`

const Header = styled.header`
  margin-bottom: var(--spacingMarge);
  position: relative;

  &.-base {
    display: flex;
    flex-direction: column-reverse;
    margin-top: var(--spacingMedium);

    ${Content} {
      align-items: center;
      padding: var(--spacingSection);
      padding-bottom: var(--spacingLarge);
      padding-top: var(--spacingXLarge);

      h1 {
        text-align: center;
      }
    }
  }

  &.-featured {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, 1fr);
    min-height: 720px;

    ${media.sm`
      min-height: 800px;
    `}

    ${media.md`
      min-height: 960px;
    `}

    ${ImageWrapper} {
      grid-column: 1;
      grid-row: 1;
      position: relative;

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

    ${Content} {
      align-self: center;
      grid-column: 1;
      grid-row: 1;
      padding: var(--spacingMedium);
      position: relative;
      text-align: center;

      ${media.sm`
        align-self: center;
        grid-row: 1;
      `}

      h1 {
        color: #fff;
        text-align: center;
        ${fluidSize(6, 40, 96, "vw", "font-size")}
      }
    }
  }

  &.-split {
    border-bottom: var(--borderBase);
    display: grid;
    gap: var(--spacingGutter);
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, 1fr);
    margin-top: var(--spacingLarge);
    max-height: 100vh;
    position: relative;

    ${media.sm`
      margin-top: 0;
      min-height: 960px;
      grid-template-columns: 1fr 1fr;
    `}

    ${ImageWrapper} {
      grid-row: 1;
      width: 100%;

      ${media.sm`
         grid-column: 2;
      `}
    }

    ${Content} {
      grid-column: 1;
      padding: var(--spacingMedium);

      ${media.sm`
        align-self: center;
        grid-row: 1;
      `}

      h1 {
        ${fluidSize(5, 40, 80, "vw", "font-size")}
      }
    }
  }

  &.-editorial {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, 1fr);

    ${ImageWrapper} {
      display: none;
    }

    ${Content} {
      padding: var(--spacingMedium);
      padding-top: var(--spacingXLarge);
      text-align: center;

      h1 {
        text-align: center;
        ${fluidSize(8.5, 64, 200, "vw", "font-size")}
      }
    }
  }
`
