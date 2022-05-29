import React from "react"
import styled from "styled-components"

import Signature from "assets/signature.svg"
import { Container } from "@components/layout"

export default function PostSignature() {
  return (
    <Container mg flex alignCenter justifyCenter>
      <Signature />
    </Container>
  )
}
