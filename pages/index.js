import React from "react"
import Head from "next/head"
import Image from "next/image"
import { gql } from "graphql-request"

import { request, POST_FRAGMENT } from "@data/craft"
import Youtube from "@components/youtube"

import Header from "@sections/indexHeader"
import RecentPosts from "@sections/indexRecent"
import Wallflower from "@sections/indexWallflower"
import HomeSection from "@sections/indexHome"
import Travel from "@sections/indexTravel"
import Fashion from "@sections/indexFashion"
import Shop from "@sections/indexShop"
import About from "@sections/indexAbout"

import SEO from "@utils/seo/seo"

const HOME_QUERY = gql`
  query HomePage {
    home: entry(slug: "home") {
      ... on home_home_Entry {
        id
        slug
        title
        metaTags {
          title
        }
        metaImage {
          url
        }
        metaDescription
      }
    }
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
  const {
    home,
    featuredPost,
    recentPosts,
    homePosts,
    fashionPosts,
    travelPosts,
  } = data

  return (
    <React.Fragment>
      <SEO
        title={home.title}
        description={home.metaDescription}
        image={home.metaImage[0].url}
        pathname={home.slug}
      />
      <Header post={featuredPost} />
      <RecentPosts posts={recentPosts} />
      <Youtube />
      <HomeSection posts={homePosts} />
      <Travel posts={travelPosts} />
      <Fashion posts={fashionPosts} />
      <Shop />
      <Wallflower />
      <About />
    </React.Fragment>
  )
}
