import React from "react"
import styled from "styled-components"

import { Container, Image, Video } from "@components/layout"

const ImageGallery = ({ parts }) => {
  return (
    <ImageContainer
      mg
      containerXLarge
      flex
      align={parts.alignment}
      id={parts.sectionId}
    >
      {parts.gallery.map((partImage, index) => (
        <React.Fragment key={index}>
          {partImage.kind === "image" ? (
            <Image key={index}>
              <img src={partImage.url} alt={partImage.title} />
            </Image>
          ) : (
            <Video key={index}>
              <video autoPlay loop muted playsInline>
                <source src={partImage.url} type="video/mp4" />
              </video>
            </Video>
          )}
        </React.Fragment>
      ))}
    </ImageContainer>
  )
}

export default ImageGallery

const ImageContainer = styled(Container)`
  ${Image} {
    flex: 1 1 100%;
    padding-right: var(--spacingGutter);
    &:first-of-type {
      padding-left: var(--spacingGutter);
    }
  }
  ${Video} {
    flex: 1 1 100%;
    padding-right: var(--spacingGutter);

    &:first-of-type {
      padding-left: var(--spacingGutter);
    }
  }
`
