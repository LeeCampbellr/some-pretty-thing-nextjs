import { useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import { gql } from "graphql-request"
import useSWRInfinite from "swr/infinite"

import { Container, Section } from "@components/layout"
import { Heading } from "@components/type"
import PostCard from "@components/post/postCard"
import { media } from "@utils/media"
import Navigation from "@components/category/navigation"
import { Button } from "@components/links"
import { client, request, fetcher, POST_FRAGMENT } from "@data/craft"
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
  const cat = await request({
    query: CATEGORY_QUERY,
    variables: { slug: params.slug },
  })

  return {
    props: { cat },
  }
}

export default function Category({ cat }) {
  const numToQuery = 20
  const [skip, setSkip] = useState(0)

  const postQuery = gql`
    query Posts($skip: Int, $limit: Int, $catId: [QueryArgument]) {
      entries(sectionId: 10, offset: $skip, limit: $limit, categories: $catId) {
        ...PostFragment
      }
      entryCount(sectionId: 10, categories: $catId)
    }
    ${POST_FRAGMENT}
  `

  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) => [
      postQuery,
      { skip: index * numToQuery, limit: numToQuery, catId: cat.category.id },
    ],
    fetcher
  )

  const entries = data && data.flatMap((entries) => entries.entries)
  const noMoreEntries = entries && entries.length === data[0].entryCount

  return (
    <Page xlTop>
      <SEO title={cat.category.title} />

      <Heading html="h1" level="huge" center>
        {cat.category.title}
      </Heading>

      <Navigation category={cat.category} />

      <Posts grid>
        {entries &&
          entries.map((post, index) => <PostCard key={index} post={post} />)}
      </Posts>

      <Container sm smTop flex alignCenter justifyCenter>
        {!noMoreEntries && (
          <Button onClick={() => setSize(size + 1)}>Load More Posts</Button>
        )}
      </Container>
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
