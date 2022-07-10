import React from "react"
import Image from "next/image"

import { Container, Image as ImageWrapper, Video } from "@components/layout"

const ImageSplit = ({ parts }) => {
  return (
    <Container
      mg
      containerLarge
      grid
      gridTwo
      align={parts.alignment}
      id={parts.sectionId}
    >
      {parts.imageLeft[0].kind === "image" ? (
        <ImageWrapper size={parts.imageLeftSize}>
          <Image
            src={parts.imageLeft[0].url}
            alt={parts.imageLeft[0].title}
            width={parts.imageLeft[0].width}
            height={parts.imageLeft[0].height}
          />
        </ImageWrapper>
      ) : (
        <Video size={parts.imageLeftSize}>
          <video autoPlay loop muted playsInline>
            <source src={parts.imageLeft[0].url} type="video/mp4" />
          </video>
        </Video>
      )}
      {parts.imageRight[0].kind === "image" ? (
        <ImageWrapper size={parts.imageRightSize}>
          <Image
            src={parts.imageRight[0].url}
            alt={parts.imageRight[0].title}
            width={parts.imageRight[0].width}
            height={parts.imageRight[0].height}
          />
        </ImageWrapper>
      ) : (
        <Video size={parts.imageRightSize}>
          <video autoPlay loop muted playsInline>
            <source src={parts.imageRight[0].url} type="video/mp4" />
          </video>
        </Video>
      )}
    </Container>
  )
}

export default ImageSplit
