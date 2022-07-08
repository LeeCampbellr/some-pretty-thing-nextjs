import React from "react"
import Head from "next/head"

import { getShopStyleLists, getShopStyleFeatured } from "@data/shopstyle"
import CardShop from "@components/shop/shopCard"
import SectionShop from "@components/sections/indexShop"
import { Section, Container } from "@components/layout"
import { Heading } from "@components/type"
import { media } from "@utils/media"

export async function getStaticProps() {
  const lists = await getShopStyleLists()
  const favorites = await getShopStyleFeatured()

  return {
    props: { lists, favorites },
  }
}

export default function Shop({ lists, favorites }) {
  return (
    <>
      <SectionShop />
      <Section>
        <Container md mdTop>
          <Heading html="h2" level="h3" center>
            Recently Added
          </Heading>
        </Container>
        <Container lg grid gridThree>
          {favorites.map((shopItem, index) => (
            <CardShop shopItem={shopItem} category="all" key={index} />
          ))}
        </Container>
      </Section>
    </>
  )
}
