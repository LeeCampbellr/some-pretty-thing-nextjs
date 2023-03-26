import React from "react"
import Head from "next/head"
import styled from "styled-components"

import { Container } from "@components/layout"

const Iframe = ({ parts }) => {
  return (
    <Container mg containerLarge section>
      <IFrameWrapper
        dangerouslySetInnerHTML={{ __html: parts.embed }}
      ></IFrameWrapper>
    </Container>
  )
}

export default Iframe

const IFrameWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`
