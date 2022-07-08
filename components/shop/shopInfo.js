import React from "react"
import styled from "styled-components"

import { fluidSize } from "@utils/fluidSize"

const ShopInfo = ({ brand, category }) => (
  <Info>
    <Heading html="h6">
      {category}&nbsp;|&nbsp;<Brand>{brand}</Brand>
    </Heading>
  </Info>
)

export default ShopInfo

const Info = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  padding: 0;
`

const Heading = styled.h6`
  color: var(--gray60);
  font-family: var(--paragraphFamily);
  ${fluidSize(4, 12, 14, "vw", "font-size")}
  font-weight: var(--paragraphWeight);
  letter-spacing: 2px;
  margin: 1rem 0;
  text-transform: uppercase;
`

const Brand = styled.span`
  text-transform: initial;
`
