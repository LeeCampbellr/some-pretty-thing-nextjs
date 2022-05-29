import React from "react"

import { Container, Section, Image, Video } from "@components/layout"

const ContentSplitImage = ({ parts }) => {
  return (
    <Section>
      <Container
        mg
        containerLarge
        grid
        gridTwo
        align={parts.alignment}
        layout={parts.layout}
        id={parts.sectionId}
      >
        <div dangerouslySetInnerHTML={{ __html: parts.paragraph }} />

        {parts.image[0].kind === "image" ? (
          <Image size={parts.imageSize}>
            <img src={parts.image[0].url} alt={parts.image[0].title} />
          </Image>
        ) : (
          <Video size={parts.imageSize}>
            <video autoPlay loop muted playsInline>
              <source src={parts.image[0].url} type="video/mp4" />
            </video>
          </Video>
        )}
      </Container>
    </Section>
  )
}

export default ContentSplitImage
