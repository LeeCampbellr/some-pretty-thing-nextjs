import React from "react"

import { Container, Image, Video } from "@components/layout"

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
        <Image size={parts.imageLeftSize}>
          <img src={parts.imageLeft[0].url} alt={parts.imageLeft[0].title} />
        </Image>
      ) : (
        <Video size={parts.imageLeftSize}>
          <video autoPlay loop muted playsInline>
            <source src={parts.imageLeft[0].url} type="video/mp4" />
          </video>
        </Video>
      )}
      {parts.imageRight[0].kind === "image" ? (
        <Image size={parts.imageRightSize}>
          <img src={parts.imageRight[0].url} alt={parts.imageRight[0].title} />
        </Image>
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
