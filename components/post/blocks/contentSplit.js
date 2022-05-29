import React from "react"

import { Container } from "@components/layout"

const ContentSplit = ({ parts }) => {
  return (
    <Container containerLarge mg section grid gridTwo id={parts.sectionId}>
      <div dangerouslySetInnerHTML={{ __html: parts.paragraphLeft }}></div>
      <div dangerouslySetInnerHTML={{ __html: parts.paragraphRight }}></div>
    </Container>
  )
}

export default ContentSplit
