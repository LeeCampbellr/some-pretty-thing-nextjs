import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { gql } from "graphql-request"

import { Container, Section } from "@components/layout"
import { Heading } from "@components/type"
import PostCard from "@components/post/postCard"
import { media } from "@utils/media"
import Navigation from "@components/category/navigation"

import { request, POST_FRAGMENT } from "@data/craft"
import SEO from "@utils/seo/seo"

export async function getStaticPaths() {
  const ALL_CATEGORIES_QUERY = gql`
    query AllCategories {
      categories {
        slug
      }
    }
  `
  const data = await request({
    query: ALL_CATEGORIES_QUERY,
  })

  const paths = data.categories.map((category) => ({
    params: { slug: category.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const CATEGORY_QUERY = gql`
    query Category($slug: [String]) {
      category(slug: $slug) {
        ... on postCategories_Category {
          title
          id
          uri
          slug
          metaDescription
          metaTags {
            title
          }
          metaImage {
            url
          }
          children {
            title
            slug
          }
          parent {
            title
            slug
            children {
              title
              slug
            }
          }
          displayTitle
          featuredContent {
            url
            title
          }
          featuredContentDisplay
        }
      }
    }
  `
  const data = await request({
    query: CATEGORY_QUERY,
    variables: { slug: params.slug },
  })

  const POST_QUERY = gql`
    query Posts($id: [QueryArgument]) {
      entries(categories: $id) {
        ...PostFragment
      }
    }
    ${POST_FRAGMENT}
  `

  const posts = await request({
    query: POST_QUERY,
    variables: { id: data.category.id },
  })

  return {
    props: { data, posts },
  }
}

export default function Category({ data, posts }) {
  return (
    <Page xlTop>
      <SEO title={data.category.title} />

      <Heading html="h1" level="huge" center>
        {data.category.title}
      </Heading>

      <Navigation category={data.category} />

      <Posts grid>
        {posts.entries.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </Posts>
    </Page>
  )
}

const Page = styled(Section)`
  margin-top: var(--spacingLarge);

  ${media.sm`
    margin-top: 0;
  `}
`
const Posts = styled(Container)`
  ${media.sm`
    grid-template-columns: repeat(6, 1fr);

    article {
      grid-column: auto / span 2;
      &:nth-child(-n + 2) {
        grid-column: auto / span 3;
      }
    }
  `}
`
