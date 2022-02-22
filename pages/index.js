import React from "react"
import Head from "next/head"
import Image from "next/image"
import { gql } from "graphql-request"

import { request, POST_FRAGMENT } from "@utils/craft"

import Header from "@sections/indexHeader"
import RecentPosts from "@sections/indexRecent"
import Wallflower from "@sections/indexWallflower"
import HomeSection from "@sections/indexHome"
import Travel from "@sections/indexTravel"
import Fashion from "@sections/indexFashion"
import Shop from "@sections/indexShop"
import About from "@sections/indexAbout"

const HOME_QUERY = gql`
  query HomePage {
    featuredPost: entry {
      ... on posts_post_Entry {
        id
        title
        slug
        postDate
        excerpt
        categories {
          title
          slug
        }
        homeHeaderLayout
        featuredImage {
          url
          title
          width
          height
        }
      }
    }
    recentPosts: entries(limit: 5, offset: 1) {
      ...PostFragment
    }
    homePosts: entries(
      offset: 0
      limit: 3
      sectionId: "10"
      categories: "132"
    ) {
      ...PostFragment
    }
    travelPosts: entries(
      offset: 0
      limit: 10
      sectionId: "10"
      categories: "133"
    ) {
      ...PostFragment
    }
    fashionPosts: entries(
      offset: 0
      limit: 3
      sectionId: "10"
      categories: "37"
    ) {
      ...PostFragment
    }
  }

  ${POST_FRAGMENT}
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
  const { featuredPost, recentPosts, homePosts, fashionPosts, travelPosts } =
    data

  return (
    <React.Fragment>
      <Header post={featuredPost} />
      <RecentPosts posts={recentPosts} />
      <Wallflower />
      <HomeSection posts={homePosts} />
      <Travel posts={travelPosts} />
      <Fashion posts={fashionPosts} />
      <Shop />
      <About />
    </React.Fragment>
  )
}
