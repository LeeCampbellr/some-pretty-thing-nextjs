import React, { useEffect, useRef } from "react"
import Image from "next/image"
import styled from "styled-components"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import dayjs from "dayjs"
var duration = require("dayjs/plugin/duration")
dayjs.extend(duration)

import { Container, Section } from "@components/layout"
import { Heading } from "@components/type"
import { LinkArrow } from "@components/links"
import { media } from "@utils/media"

export default function Youtube({ videos }) {
  const ONE_MINUTE_IN_MILLISECONDS = 60000

  const videosWithDurationGreaterThanOneMinute = videos?.items?.filter(
    (item) => {
      const durationInMilliseconds = dayjs
        .duration(item.contentDetails.duration)
        .asMilliseconds()
      return durationInMilliseconds >= ONE_MINUTE_IN_MILLISECONDS
    }
  )

  const slicedVideos = videosWithDurationGreaterThanOneMinute?.slice(0, 3)

  return (
    <Section bg mgTop mg>
      <Container>
        <Header>
          <Heading html="h2" level="h3" center title>
            Latest Youtube Videos
          </Heading>
        </Header>

        <Videos>
          {slicedVideos?.map((video, index) => (
            <Card
              key={index}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
            >
              <ImageEffect>
                <ImageWrapper ratio={16 / 9}>
                  <Image
                    src={video.snippet.thumbnails.maxres.url}
                    width={video.snippet.thumbnails.maxres.width}
                    height={video.snippet.thumbnails.maxres.height}
                    alt={video.snippet.title}
                  />
                </ImageWrapper>
              </ImageEffect>
              <Heading html="h4" level="h4" center>
                {video.snippet.title}
              </Heading>
            </Card>
          ))}
        </Videos>
      </Container>

      <LinkArrow
        to="https://www.youtube.com/@Emily_Campbell/videos"
        text="All Youtube Videos"
        target="_blank"
        rel="noopener noreferrer nofollow"
      />
    </Section>
  )
}

const Header = styled.div`
  margin-bottom: 2.5rem;

  ${media.sm`
    margin-bottom: 5rem;
  `}
`

const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 3rem;
  margin-bottom: 2.5rem;

  ${media.sm`
    margin-bottom: 2rem;
    grid-template-columns: repeat(3, 1fr);
  `}
`

const ImageEffect = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  img {
    transition: var(--transitionLong);
  }

  &:hover {
    img {
      transform: scale(1.075);
    }
  }
`

const ImageWrapper = styled(AspectRatio.Root)`
  overflow: hidden;
  object-fit: cover;
  object-position: center;
`

const Card = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
