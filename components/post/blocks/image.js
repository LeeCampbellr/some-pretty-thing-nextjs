import React from "react"

import { Container, Image as ImageContainer, Video } from "@components/layout"

const Image = ({ parts }) => {
  return (
    <Container mg id={parts.sectionId}>
      {parts.image[0].kind === "image" ? (
        <ImageContainer size={parts.imageSize}>
          <img src={parts.image[0].url} alt={parts.image[0].title} />
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

export default Image
