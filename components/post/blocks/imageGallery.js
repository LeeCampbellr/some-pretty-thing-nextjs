import React from "react"
import Image from "next/image"
import styled from "styled-components"

import { Container, Image as ImageWrapper, Video } from "@components/layout"

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
            <ImageWrapper key={index}>
              <Image
                src={partImage.url}
                alt={partImage.title}
                width={partImage.width}
                height={partImage.height}
              />
            </ImageWrapper>
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
  ${ImageWrapper} {
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
