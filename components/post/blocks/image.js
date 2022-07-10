import React from "react"
import Image from "next/image"

import { Container, Image as ImageContainer, Video } from "@components/layout"

const ImageComponent = ({ parts }) => {
  return (
    <Container mg id={parts.sectionId}>
      {parts.image[0].kind === "image" ? (
        <ImageContainer size={parts.imageSize}>
          <Image
            src={parts.image[0].url}
            alt={parts.image[0].title}
            width={parts.image[0].width}
            height={parts.image[0].height}
          />
        </ImageContainer>
      ) : (
        <Video size={parts.imageSize}>
          <video autoPlay loop muted playsInline>
            <source src={parts.image[0].url} type="video/mp4" />
          </video>
        </Video>
      )}
    </Container>
  )
}

export default ImageComponent
