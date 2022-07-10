import React, { useEffect, useRef } from "react"
import Image from "next/image"
import styled from "styled-components"
import { gsap } from "gsap"
import { gql } from "graphql-request"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRouter } from "next/router"

import LineTwo from "assets/elements/line-2.svg"
import LineThree from "assets/elements/line-3.svg"
import HeaderOne from "assets/press--1.jpg"
import HeaderTwo from "assets/press--2.jpg"
import { Container, Section } from "@components/layout"
import { Heading, Paragraph } from "@components/type"
import CaseStudies from "@components/about/caseStudies"
import SectionContact from "@components/sections/contact"
import { request } from "@data/craft"
import { media } from "@utils/media"
import SEO from "@utils/seo/seo"

export async function getStaticProps() {
  const PRESS_QUERY = gql`
    query PressPage {
      entry(uid: "65f41241-004d-4182-9de0-59df284c087a") {
        ... on press_press_Entry {
          title
          id
          slug
          metaTags {
            title
          }
          metaImage {
            url
          }
          metaDescription
          brands {
            ... on brands_brandRow_BlockType {
              id
              brands {
                url
                width
                height
              }
            }
          }
          pressPosts {
            ... on pressPosts_post_BlockType {
              id
              brand
              sortOrder
              post {
                slug
                title
              }
            }
          }
        }
      }
    }
  `
  const data = await request({
    query: PRESS_QUERY,
  })

  return {
    props: { data },
  }
}
const Press = ({ data }) => {
  const router = useRouter()
  const { entry } = data
  const headerParallaxOne = useRef(null)
  const headerParallaxTwo = useRef(null)
  const brandsOne = useRef(null)
  const brandsTwo = useRef(null)
  const brandsThree = useRef(null)
  const brandsFour = useRef(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
    gsap.fromTo(
      headerParallaxOne.current,
      {
        y: "0%",
      },
      {
        scrollTrigger: {
          trigger: headerParallaxOne.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.75,
          toggleActions: "play none none none",
        },
        y: "-20%",
      }
    )
    gsap.fromTo(
      headerParallaxTwo.current,
      {
        y: "0%",
      },
      {
        scrollTrigger: {
          trigger: headerParallaxTwo.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.75,
          toggleActions: "play none none none",
        },
        y: "-20%",
      }
    )
    gsap.fromTo(
      brandsOne.current,
      {
        x: "10%",
      },
      {
        scrollTrigger: {
          trigger: brandsOne.current,
          start: "center bottom",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play none none none",
        },
        x: "-45%",
        y: "0",
      }
    )
    gsap.fromTo(
      brandsTwo.current,
      {
        x: "7.5%",
      },
      {
        scrollTrigger: {
          trigger: brandsTwo.current,
          start: "center bottom",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play none none none",
        },
        x: "-45%",
        y: "0",
      }
    )
    gsap.fromTo(
      brandsThree.current,
      {
        x: "5%",
      },
      {
        scrollTrigger: {
          trigger: brandsThree.current,
          start: "center bottom",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play none none none",
        },
        x: "-45%",
        y: "0",
      }
    )
    gsap.fromTo(
      brandsFour.current,
      {
        x: "2.5%",
      },
      {
        scrollTrigger: {
          trigger: brandsFour.current,
          start: "center bottom",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play none none none",
        },
        x: "-45%",
        y: "0",
      }
    )
  }, [router.pathname])

  return (
    <>
      <SEO
        title={entry.title}
        description={entry.metaDescription}
        image={entry.metaImage[0].url}
        pathname={entry.slug}
      />

      <Page>
        <Section xl>
          <LineTwo className="line -top" />
          <LineThree className="line -bottom" />
          <Container grid alignCenter containerLarge>
            <Images>
              <HeaderImage>
                <HeaderParallax ref={headerParallaxOne}>
                  <Image src={HeaderOne} alt="" />
                </HeaderParallax>
              </HeaderImage>
              <HeaderImage>
                <HeaderParallax ref={headerParallaxTwo}>
                  <Image src={HeaderTwo} alt="" />
                </HeaderParallax>
              </HeaderImage>
            </Images>
            <Content>
              <Heading html="h1" level="big" center>
                It’s not about followers or likes. it’s about Telling a story
                through high quality, personal content.{" "}
              </Heading>
              <Paragraph level="md">
                I’ve had the privilege to work with brands I’ve admired and
                bought from for years - as well as a few new ones that now have
                my loyalty. Whenever I agree to a contractual relationship with
                a brand it’s because I truly admire their products and ethos.{" "}
              </Paragraph>
            </Content>
          </Container>
        </Section>
        <Section xl>
          <Container sm>
            <Heading html="h6" level="sh" center>
              Brands I’ve Worked With
            </Heading>
          </Container>
          <Container containLg>
            <Brands>
              <BrandRow ref={brandsOne}>
                {entry.brands[0].brands.map((brand, index) => (
                  <Image
                    src={brand.url}
                    key={index}
                    alt="brand"
                    width={brand.width}
                    height={brand.height}
                  />
                ))}
              </BrandRow>
              <BrandRow ref={brandsTwo}>
                {entry.brands[1].brands.map((brand, index) => (
                  <Image
                    src={brand.url}
                    key={index}
                    alt="brand"
                    width={brand.width}
                    height={brand.height}
                  />
                ))}
              </BrandRow>
              <BrandRow ref={brandsThree}>
                {entry.brands[2].brands.map((brand, index) => (
                  <Image
                    src={brand.url}
                    key={index}
                    alt="brand"
                    width={brand.width}
                    height={brand.height}
                  />
                ))}
              </BrandRow>
              <BrandRow ref={brandsFour}>
                {entry.brands[3].brands.map((brand, index) => (
                  <Image
                    src={brand.url}
                    key={index}
                    alt="brand"
                    width={brand.width}
                    height={brand.height}
                  />
                ))}
              </BrandRow>
            </Brands>
          </Container>
        </Section>
        <CaseStudies entries={entry.pressPosts} />
        <SectionContact />
      </Page>
    </>
  )
}

export default Press

const Page = styled.div`
  margin-top: var(--spacingMedium);

  ${media.sm`
    margin-top: 0;
  `}

  .line {
    height: auto;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    width: 100vw;
    z-index: -1;
  }

  .line.-top {
    top: 5%;
  }
  .line.-bottom {
    bottom: 0%;
  }
  .line.-center {
    top: 50%;
    transform: translateY(-100%);
  }
`

const Images = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  grid-column: 1;
  grid-row: 1;
  opacity: 0.5;

  ${media.md`
    opacity: 1;
  `}

  div {
    flex: 0 0 35%;
  }

  div:nth-of-type(1) {
    transform: translateY(-20%);

    ${media.md`
      transform: translateY(-5%);
    `}
  }

  div:nth-of-type(2) {
    transform: translateY(5%);
    margin-top: var(--spacingXLarge);
  }
`

const HeaderImage = styled.div`
  overflow: hidden;
  position: relative;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((6 / 4) * 100%);
  }
`

const HeaderParallax = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -10%;
  margin: 0 auto;
  width: 120%;
`

const Content = styled.div`
  grid-column: 1;
  grid-row: 1;
  margin: 0 auto;
  max-width: var(--containerLarge);
  z-index: var(--zFront);

  h1 {
    margin-top: var(--spacingXLarge);
  }

  p {
    max-width: var(--containerXSmall);
    margin-top: var(--spacingSmall);

    ${media.md`
      margin-top: var(--spacingMedium);
      margin-left: var(--spacingLarge);
    `}
  }
`

const Brands = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr;
  width: 175vw;

  ${media.sm`
  grid-gap: 1rem;
  `}
`

const BrandRow = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(9, 1fr);
  width: 175vw;

  img {
    width: 100%;
  }
`
