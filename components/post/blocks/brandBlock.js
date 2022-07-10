import React from "react"
import Image from "next/image"

import { Section, Container } from "@components/layout"

const BrandBlock = ({ parts }) => {
  return (
    <Section>
      <Container
        mg
        containerLarge
        grid
        gridFour
        align={parts.alignment}
        id={parts.sectionId}
      >
        {parts.brand.map((node, index) => (
          <a href={node.linkUrl} key={index}>
            <Image
              src={node.image[0].url}
              width={node.image[0].width}
              height={node.image[0].height}
              alt="Brand"
            />
          </a>
        ))}
      </Container>
    </Section>
  )
}

export default BrandBlock
