import React from "react"
import Image from "next/image"
import styled from "styled-components"

import { Heading } from "@components/type"
import InfoShop from "@components/shop/shopInfo"

const CardShop = ({ shopItem, category }) => {
  const { product } = shopItem

  return (
    <Card href={product.clickUrl}>
      <ImageWrapper>
        <Image
          src={product.image.sizes.Original.url}
          alt={product.brandedName}
          layout="fill"
        />
      </ImageWrapper>
      <InfoShop brand={product.retailer.name} category={category} />
      <Heading html="h2" level="h3" center>
        {product.name}
      </Heading>
    </Card>
  )
}
export default CardShop

const Card = styled.a`
  text-align: center;
`

const ImageWrapper = styled.div`
  position: relative;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((4 / 3) * 100%);
  }

  > img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`
