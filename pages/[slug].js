import React from "react"
import styled from "styled-components"
import { gql } from "graphql-request"

import Header from "@post/postHeader"
import Content from "@post/postContent"
import Signature from "@post/postSignature"
import Sidebar from "@post/postSidebar"

import { request } from "@utils/craft"
import { media } from "@utils/media"

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
          <Content />
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
