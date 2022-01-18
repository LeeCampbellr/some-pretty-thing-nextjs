import Image from "next/image"
import Link from "next/link"

import { styled } from "stitches.config"
import { Type } from "@components/type"
import Date from "@components/date"

export default function PostCard({ post }) {
  const { slug, featuredImage, postDate, title, excerpt, categories } = post

  return (
    <Card>
      <Link href={slug}>
        <a>
          <ImageWrapper>
            <Image
              src={featuredImage[0].url}
              alt={featuredImage[0].title}
              layout="fill"
              priority
              objectFit="cover"
            />
          </ImageWrapper>
          <Content>
            <Info>
              <Type html="h6" size="sh">
                <Date date={postDate} />
                &nbsp;|&nbsp;
              </Type>

              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                  <a>
                    <Type html="h6" size="sh">
                      {(index ? ", " : "") + category.title}
                    </Type>
                  </a>
                </Link>
              ))}
            </Info>
            <Type html="h2" size="h2">
              {title}
            </Type>
            {excerpt && (
              <Type html="p" size="p">
                {excerpt}
              </Type>
            )}
          </Content>
        </a>
      </Link>
    </Card>
  )
}

const Card = styled("article", {
  position: "relative",
})

const ImageWrapper = styled("div", {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  marginBottom: "2rem",

  "&:before": {
    display: "block",
    content: " ",
    width: "100%",
    paddingTop: "75%",
  },
})

const Content = styled("div", {
  position: "relative",
})

const Info = styled("div", {
  display: "flex",
  marginBottom: "0.5rem",
})
