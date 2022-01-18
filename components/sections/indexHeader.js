import Image from "next/image"
import Link from "next/link"

import { styled } from "stitches.config"
import { Type } from "@components/type"
import { LinkArrow } from "@components/links"
import Date from "@components/date"

export default function IndexHeader({ post }) {
  const {
    homeHeaderLayout,
    slug,
    featuredImage,
    postDate,
    title,
    excerpt,
    categories,
  } = post

  return (
    <Link href={slug}>
      <a>
        <Header layout={homeHeaderLayout === "base" ? "base" : "featured"}>
          <ImageWrapper
            layout={homeHeaderLayout === "base" ? "base" : "featured"}
          >
            <Image
              src={featuredImage[0].url}
              alt={featuredImage[0].title}
              layout="fill"
              priority
              objectFit="cover"
            />
          </ImageWrapper>
          <Content layout={homeHeaderLayout === "base" ? "base" : "featured"}>
            <Info>
              <Type
                html="h6"
                size="sh"
                light={homeHeaderLayout === "featured" && true}
              >
                <Date date={postDate} />
                &nbsp;|&nbsp;
              </Type>

              {categories.map((category, index) => (
                <Link href={`/category/${category.slug}`}>
                  <a>
                    <Type
                      html="h6"
                      size="sh"
                      light={homeHeaderLayout === "featured" && true}
                    >
                      {(index ? ", " : "") + category.title}
                    </Type>
                  </a>
                </Link>
              ))}
            </Info>
            <Type
              html="h2"
              size="h1"
              light={homeHeaderLayout === "featured" && true}
              align={homeHeaderLayout === "featured" && "center"}
            >
              {title}
            </Type>
            {excerpt && (
              <Type
                html="p"
                size="p"
                light={homeHeaderLayout === "featured" && true}
                align={homeHeaderLayout === "featured" && "center"}
              >
                {excerpt}
              </Type>
            )}
            <LinkArrow text="Learn More" />
          </Content>
        </Header>
      </a>
    </Link>
  )
}

const Header = styled("header", {
  alignItems: "center",
  borderBottom: "1px solid $gray20",
  display: "grid",
  minHeight: "95vh",
  gap: "$gutter",
  position: "relative",
  gridTemplateRows: "minmax(0, 1fr)",
  marginBottom: "var(--spacingLarge)",
  marginTop: "var(--spacingLarge)",

  "@mediaSm": {
    maxHeight: "95vh",
    marginTop: 0,
  },

  variants: {
    layout: {
      base: {
        "@mediaSm": {
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
        },
      },
      featured: {
        "@mediaSm": {
          gridTemplateColumns: "1fr",
          maxHeight: "1000px",
        },
      },
    },
  },
})

const ImageWrapper = styled("div", {
  gridRow: "1",
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  display: "block",
  objectFit: "fill",

  "@mediaSm": {
    gridColumn: "2",
  },

  variants: {
    layout: {
      base: {},
      featured: {
        gridColumn: "1",
        gridRow: "1",
        maxHeight: "60rem",

        "&:after": {
          content: " ",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  },
})

const Content = styled("div", {
  gridRow: "2",
  padding: "var(--spacingMedium)",
  zIndex: "50",
  width: "100%",

  "@mediaSm": {
    gridColumn: "1",
    gridRow: "1",
  },

  variants: {
    layout: {
      base: {},
      featured: {
        textAlign: "center",
        gridColumn: "1",
        gridRow: "1",
      },
    },
  },
})

const Info = styled("div", {
  display: "flex",
  marginBottom: "2rem",
})
