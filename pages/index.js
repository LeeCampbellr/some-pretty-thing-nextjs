import Head from "next/head"
import Image from "next/image"

import { styled } from "stitches.config"
import { request } from "@lib/craft"

const HOME_QUERY = `
  query HomePage {
    entry {
      title
    }
  }
`

export async function getStaticProps() {
  const data = await request({
    query: HOME_QUERY,
  })
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  return (
    <Header>
      <Heading>testing homepage</Heading>
      <h6>{data.entry.title}</h6>
    </Header>
  )
}

const Header = styled("div", {
  background: "$red20",
  height: "100vh",
  width: "100vw",
})

const Heading = styled("h1", {
  fontFamily: "$heading",
  fontSize: "$6",
})
