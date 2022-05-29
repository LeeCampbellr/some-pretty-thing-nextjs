import React from "react"

import { Container } from "@components/layout"
import { Heading } from "@components/type"

const Quote = ({ parts }) => {
  return (
    <Container mg containerMedium section id={parts.sectionId}>
      <Heading html="h2" level="h2">
        <em>&quot;{parts.quote}&quot;</em>
      </Heading>
    </Container>
  )
}

export default Quote
