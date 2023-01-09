import React, { useEffect, useRef } from "react"
import Image from "next/image"
import styled from "styled-components"
import useSWR from "swr"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import dayjs from "dayjs"
var duration = require("dayjs/plugin/duration")
dayjs.extend(duration)

import { Container, Section } from "@components/layout"
import { Heading } from "@components/type"
import { LinkArrow } from "@components/links"

export default function Youtube() {
  const ONE_MINUTE_IN_MILLISECONDS = 60000

  const getVideosList = async () => {
    const response = await fetch(videoListEndpoint)
    return await response.json()
  }

  const videoListEndpoint = `${process.env.NEXT_PUBLIC_YOUTUBE_API_URL}/search?part=snippet&channelId=UChgmwsttG2qzHhPPlva1auA&maxResults=15&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`

  const {
    data: videosList,
    error: videosListError,
    isLoading: videosListLoading,
  } = useSWR(videoListEndpoint, getVideosList)
  console.log(videosList)
  console.log(videosListError)

  const videosListIds = videosList?.items
    .map((item) => item.id.videoId)
    .join("&id=")

  const videoDetailsEndpoint = `${process.env.NEXT_PUBLIC_YOUTUBE_API_URL}/videos?part=snippet&part=contentDetails&part=player&id=${videosListIds}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`

  const getVideosDetails = async () => {
    const response = await fetch(videoDetailsEndpoint)
    return await response.json()
  }

  const {
    data: videosDetails,
    error: videosDetailsError,
    isLoading: videosDetailsLoading,
  } = useSWR(videoDetailsEndpoint, getVideosDetails)

  const videosWithDurationGreaterThanOneMinute = videosDetails?.items?.filter(
    (item) => {
      const durationInMilliseconds = dayjs
        .duration(item.contentDetails.duration)
        .asMilliseconds()
      return durationInMilliseconds >= ONE_MINUTE_IN_MILLISECONDS
    }
  )

  const videos = videosWithDurationGreaterThanOneMinute?.slice(0, 3)

  if (videosListError || videosDetailsError) return <div>failed to load</div>
  if (videosListLoading || videosDetailsLoading) return <div>loading...</div>

  return (
    <Section bg mgTop md>
      <Container>
        <Header>
          <Heading html="h2" level="h3" center title>
            Latest Youtube Videos
          </Heading>
        </Header>

        <Videos>
          {videos?.map((video, index) => (
            <Card
              key={index}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
            >
              <ImageWrapper ratio={16 / 9}>
                <Image
                  src={video.snippet.thumbnails.maxres.url}
                  width={video.snippet.thumbnails.maxres.width}
                  height={video.snippet.thumbnails.maxres.height}
                  alt={video.snippet.title}
                />
              </ImageWrapper>
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
      />
    </Section>
  )
}

const Header = styled.div`
  margin-bottom: 2.5rem;
`

const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin-bottom: 2rem;
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
