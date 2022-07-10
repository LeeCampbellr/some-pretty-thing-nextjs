import React from "react"
import Link from "next/link"

import {
  getAllShopStyleFavoritesByList,
  getShopStyleListById,
} from "@data/shopstyle"
import CardShop from "@components/shop/shopCard"
import { Section, Container } from "@components/layout"
import { Heading } from "@components/type"
import { media } from "@utils/media"
import { LinkArrow } from "@components/links"
import SEO from "@utils/seo/seo"

export async function getStaticPaths() {
  const paths = [
    { params: { slug: "home-essentials" } },
    { params: { slug: "office-&-workspace" } },
    { params: { slug: "in-my-wardrobe" } },
  ]
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const id =
    params.slug === "home-essentials"
      ? 48820337
      : params.slug === "office-&-workspace"
      ? 48820723
      : params.slug === "in-my-wardrobe"
      ? 48820248
      : null

  const list = await getShopStyleListById(id)
  const data = await getAllShopStyleFavoritesByList(id)

  return { props: { data, list } }
}

export default function ShopCategory({ data, list }) {
  const { favorites } = data

  return (
    <>
      <SEO title={list.title} />
      <Section lgTop>
        <Container flex justifyCenter md>
          <LinkArrow to="/shop" text="All Shop" reverse />
        </Container>
        <Container md>
          <Heading html="h1" level="big" center>
            {list.title}
          </Heading>
        </Container>

        <Container lg grid gridThree>
          {favorites.map((shopItem, index) => (
            <CardShop shopItem={shopItem} category={list.title} key={index} />
          ))}
        </Container>
      </Section>
    </>
  )
}
