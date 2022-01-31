import React from "react"
import styled from "styled-components"

import { Section, Container } from "@components/layout"
import { Heading } from "@components/type"
import { LinkSection } from "@components/links"
import CardPost from "@components/post/postCard"
import { media } from "@utils/media"

const IndexRecent = ({ posts }) => {
  return (
    <Section full>
      <Container sm section>
        <Heading html="h2" level="h3" center title>
          The Latest
        </Heading>
      </Container>
      <Posts grid md section>
        {posts.map((post, index) => (
          <CardPost post={post} key={index} />
        ))}
      </Posts>
      <LinkSection link="/posts" text="All Recent Posts" />
    </Section>
  )
}

export default IndexRecent

const Posts = styled(Container)`
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(min-content, max-content);

  ${media.sm`
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(min-content, max-content);

    article:nth-of-type(1) {
      grid-area: 1 / 1 / 2 / 4;
    }
    article:nth-of-type(2) {
      grid-area: 1 / 4 / 2 / 7;
    }
    article:nth-of-type(3) {
      grid-area: 2 / 1 / 3 / 3;
    }
    article:nth-of-type(4) {
      grid-area: 2 / 3 / 3 / 5;
    }
    article:nth-of-type(5) {
      grid-area: 2 / 5 / 3 / 7;
    }
  `}
`
