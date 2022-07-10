import React, { useRef, useEffect } from "react"
import Image from "next/image"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import { Section, Container } from "@components/layout"
import { LinkArrow } from "@components/links"
import { Heading } from "@components/type"
import { media } from "@utils/media"

import AboutLeft from "assets/indexAbout/about-left.png"
import AboutRight from "assets/indexAbout/about-right.png"

const SectionAbout = () => {
  const imageLeft = useRef(null)
  const imageRight = useRef(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
    gsap.fromTo(
      imageLeft.current,
      {
        y: "0%",
      },
      {
        scrollTrigger: {
          trigger: imageLeft.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.75,
          toggleActions: "play none none none",
        },
        y: "-20%",
      }
    )
    gsap.fromTo(
      imageRight.current,
      {
        y: "0%",
      },
      {
        scrollTrigger: {
          trigger: imageRight.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.75,
          toggleActions: "play none none none",
        },
        y: "-20%",
      }
    )
  }, [])

  return (
    <Section xl xlTop>
      <AboutContainer grid one>
        <Content>
          <Heading html="h1" level="big" center>
            Everyday Fashion for the Everyday Woman
          </Heading>
          <LinkArrow to="/about" text="About Me" />
        </Content>

        <Images>
          <ImageLeft>
            <ParallaxWrapper ref={imageLeft}>
              <Image
                src={AboutLeft}
                alt="Emily shooting photo with vintage camera"
              />
            </ParallaxWrapper>
          </ImageLeft>
          <ImageRight>
            <ParallaxWrapper ref={imageRight}>
              <Image
                src={AboutRight}
                alt="Emily reading a book leaning up against a console"
              />
            </ParallaxWrapper>
          </ImageRight>
        </Images>
      </AboutContainer>
    </Section>
  )
}

export default SectionAbout

const AboutContainer = styled(Container)`
  align-items: start;

  ${media.sm`
    align-items: center;
  `}
`

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1;
  margin: 0 auto;
  max-width: 60rem;
  transform: translateY(-2.5rem);

  ${media.sm`
    transform: translateY(0);
  `}
`

const Images = styled.div`
  align-items: center;
  display: grid;
  gap: 0;
  grid-column: 1;
  grid-row: 1;
  grid-template-columns: 1fr 1fr;
  z-index: var(--zLost);

  ${media.sm`
    gap: var(--spacingGutter);
  `}
`

const ParallaxWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;

  .gatsby-image-wrapper {
    transform: scale(1.1);
  }
`

const ImageLeft = styled.div`
  /* margin: 0 auto; */
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: 70%;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((4 / 3) * 100%);
  }
`
const ImageRight = styled.div`
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((4 / 3) * 100%);
  }
`
