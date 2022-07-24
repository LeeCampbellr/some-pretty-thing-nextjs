import { useState } from "react"
import styled from "styled-components"
import { gql } from "graphql-request"
import useSWRInfinite from "swr/infinite"

import { Container, Section } from "@components/layout"
import { Heading } from "@components/type"
import PostCard from "@components/post/postCard"
import { client, request, POST_FRAGMENT } from "@data/craft"
import { media } from "@utils/media"
import SEO from "@utils/seo/seo"
import { Button } from "@components/links"

export default function AllPosts() {
  const numToQuery = 20
  const [skip, setSkip] = useState(0)

  const postQuery = gql`
    query Posts($skip: Int, $limit: Int) {
      entries(sectionId: 10, offset: $skip, limit: $limit) {
        ...PostFragment
      }
      entryCount(sectionId: 10)
    }
    ${POST_FRAGMENT}
  `

  const fetcher = (query, variables) => client.request(query, variables)

  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) => [postQuery, { skip: index * numToQuery, limit: numToQuery }],
    fetcher
  )

  const entries = data && data.flatMap((entries) => entries.entries)
  const noMoreEntries = entries && entries.length === data[0].entryCount

  return (
    <Page xlTop>
      <SEO title="All Posts" />
      <Container lg>
        <Heading html="h1" level="huge" center>
          All Posts
        </Heading>
      </Container>

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
