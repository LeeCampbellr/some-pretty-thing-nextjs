import React from "react"

import { Container } from "@components/layout"

const ContentCenter = ({ parts }) => {
  return (
    <Container
      containerMedium
      mg
      section
      id={parts.sectionId}
      dangerouslySetInnerHTML={{ __html: parts.paragraph }}
    ></Container>
  )
}

export default ContentCenter
