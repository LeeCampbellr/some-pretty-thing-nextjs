import React from "react"
import styled from "styled-components"
import { gql } from "graphql-request"

import Header from "@post/postHeader"
import Content from "@post/postContent"
import Signature from "@post/postSignature"
import Sidebar from "@post/postSidebar"

import { request } from "@data/craft"
import { media } from "@utils/media"

import {
  FRAGMENT_POST_BRAND_BLOCK,
  FRAGMENT_POST_CONTENT_CENTER,
  FRAGMENT_POST_CONTENT_INTRO_INDEX,
  FRAGMENT_POST_CONTENT_INTRO_SHOP,
  FRAGMENT_POST_CONTENT_INTRO_SPONSORED,
  FRAGMENT_POST_CONTENT_SPLIT,
  FRAGMENT_POST_CONTENT_SPLIT_IMAGE,
  FRAGMENT_POST_IMAGE,
  FRAGMENT_POST_IMAGE_GALLERY,
  FRAGMENT_POST_IMAGE_SPLIT,
  FRAGMENT_POST_WIDGET,
  FRAGMENT_POST_QUOTE,
} from "data/postFragments"

export async function getStaticPaths() {
  const ALL_POSTS_QUERY = gql`
    query AllPosts {
      entries(sectionId: 10) {
        ... on posts_post_Entry {
          slug
          sectionId
        }
      }
    }
  `
  const data = await request({
    query: ALL_POSTS_QUERY,
  })

  const paths = data.entries.map((entry) => ({
    params: { slug: entry.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const POST_QUERY = gql`
    query Post($slug: [String]) {
      postHeader: entry(slug: $slug) {
        ... on posts_post_Entry {
          title
          headerLayout
          headerFontSize
          postDate
          featuredImage {
            url
          }
          categories {
            title
          }
        }
      }
      postContent: entry(slug: $slug) {
        ... on posts_post_Entry {
          postContent {
            ...brandBlock
            ...contentCenter
            ...contentIntroIndex
            ...contentIntroShop
            ...contentIntroSponsored
            ...contentSplit
            ...contentSplitImage
            ...image
            ...imageGallery
            ...imageSplit
            ...quote
            ...widget
          }
        }
      }
      postSidebar: entry(slug: $slug) {
        ... on posts_post_Entry {
          slug
          next(sectionId: 10) {
            title
            slug
            id
          }
        }
      }
    }
    ${FRAGMENT_POST_BRAND_BLOCK},
    ${FRAGMENT_POST_CONTENT_CENTER},
    ${FRAGMENT_POST_CONTENT_INTRO_INDEX},
    ${FRAGMENT_POST_CONTENT_INTRO_SHOP},
    ${FRAGMENT_POST_CONTENT_INTRO_SPONSORED},
    ${FRAGMENT_POST_CONTENT_SPLIT},
    ${FRAGMENT_POST_CONTENT_SPLIT_IMAGE},
    ${FRAGMENT_POST_IMAGE},
    ${FRAGMENT_POST_IMAGE_GALLERY},
    ${FRAGMENT_POST_IMAGE_SPLIT},
    ${FRAGMENT_POST_WIDGET},
    ${FRAGMENT_POST_QUOTE},
  `

  const data = await request({
    query: POST_QUERY,
    variables: { slug: params.slug },
  })

  return {
    props: { data },
  }
}

export default function Post({ data }) {
  return (
    <React.Fragment>
      <Article>
        <Body className="o-postBody">
          <Header postHeader={data.postHeader} />
          <Content postBlocks={data.postContent} />
          <Signature />
        </Body>

        <Sidebar sidebar={data.postSidebar} />
      </Article>
    </React.Fragment>
  )
}

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  position: relative;

  ${media.md`
    grid-template-columns: 1fr 4rem;
 `}
`

const Body = styled.div``
