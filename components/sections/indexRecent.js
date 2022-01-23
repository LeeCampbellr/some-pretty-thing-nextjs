import React from "react"
import { styled } from "stitches.config"

import PostCard from "@cards/post"
import { Type } from "@components/type"
import { Section } from "@components/layout"
import { LinkSection } from "@components/links"

export default function IndexRecent({ posts }) {
  return (
    <React.Fragment>
      <Section>
        <Type html="h3" size="h3" align="center">
          Recent Posts
        </Type>
        <Posts>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </Posts>
      </Section>
      <LinkSection to="/" text="All Recent Posts" />
    </React.Fragment>
  )
}

const Posts = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "var(--spacingGutter)",
  gridAutoRows: "minmax(min-content, max-content)",

  "@mediaSm": {
    gridTemplateColumns: "repeat(6, 1fr)",

    "article:nth-of-type(1)": {
      gridArea: "1 / 1 / 2 / 4",
    },
    "article:nth-of-type(2)": {
      gridArea: "1 / 4 / 2 / 7",
    },
    "article:nth-of-type(3)": {
      gridArea: "2 / 1 / 3 / 3",
    },
    "article:nth-of-type(4)": {
      gridArea: "2 / 3 / 3 / 5",
    },
    "article:nth-of-type(5)": {
      gridArea: "2 / 5 / 3 / 7",
    },
  },
})
