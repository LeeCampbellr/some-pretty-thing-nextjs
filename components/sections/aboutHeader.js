import React, { useRef, useEffect } from "react"
import Image from "next/image"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import { Container, Section } from "@components/layout"
import { Heading } from "@components/type"
import { media } from "@utils/media"

import LineOne from "assets/elements/line-1.svg"
import LineTwo from "assets/elements/line-2.svg"
import HeaderOne from "public/images/about/hero.png"
import HeaderTwo from "public/images/about/square.png"
import HeaderThree from "public/images/about/tall.png"

const HeaderInterview = () => {
  const parallaxOne = useRef(null)
  const parallaxTwo = useRef(null)
  const parallaxThree = useRef(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
    gsap.fromTo(
      parallaxOne.current,
      {
        y: "17.5%",
      },
      {
        scrollTrigger: {
          trigger: parallaxOne.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.75,
          toggleActions: "play none none none",
        },
        y: "-12.5%",
      }
    )
    gsap.fromTo(
      parallaxTwo.current,
      {
        y: "10%",
      },
      {
        scrollTrigger: {
          trigger: parallaxTwo.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.75,
          toggleActions: "play none none none",
        },
        y: "-25%",
      }
    )
    gsap.fromTo(
      parallaxThree.current,
      {
        y: "5%",
      },
      {
        scrollTrigger: {
          trigger: parallaxThree.current,
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
    <Header>
      <LineOne className="line -top" />
      <LineTwo className="line -bottom" />
      <Container grid xs alignCenter justifyCenter>
        <Images>
          <ImageOne>
            <ParallaxWrapper ref={parallaxOne}>
              <Image src={HeaderOne} width="1600" height="2368" />
            </ParallaxWrapper>
          </ImageOne>
          <ImageTwo>
            <ParallaxWrapper ref={parallaxTwo}>
              <Image src={HeaderTwo} width="648" height="924" />
            </ParallaxWrapper>
          </ImageTwo>
          <ImageThree>
            <ParallaxWrapper ref={parallaxThree}>
              <Image src={HeaderThree} width="480" height="718" />
            </ParallaxWrapper>
          </ImageThree>
        </Images>
        <Content>
          <Heading html="h1" level="h1" center>
            Hi, welcome to Some Pretty Thing. I’m Emily, writer, photographer
            and creative behind this blog. It’s not perfect, but It’s my world &
            I’m so excited to share it with you.
          </Heading>
        </Content>
      </Container>
    </Header>
  )
}

export default HeaderInterview

const Header = styled(Section)`
  margin-top: var(--spacingXLarge);

  ${media.sm`
    margin: 0 auto;
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

const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
`

const ImageOne = styled(ImageWrapper)`
  grid-area: 1 / 2 / span 2 / span 1;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((6 / 4) * 100%);
  }

  ${media.md`
    margin: 0 3rem;
    height: 100vh;
  `}
`

const ImageTwo = styled(ImageWrapper)`
  align-self: end;
  grid-area: 1 / 1 / span 1 / span 1;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((1 / 1) * 100%);
  }

  ${media.md`
    margin: 0 2rem;
  `}
`

const ImageThree = styled(ImageWrapper)`
  align-self: start;
  grid-area: 2 / 1 / span 1 / span 1;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((6 / 5) * 100%);
  }

  ${media.md`
    justify-self: end;
    width: 55%;
    margin: 0 2rem;
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

const Images = styled.div`
  display: grid;
  gap: var(--spacingGutter);
  grid-column: 1;
  grid-row: 2;
  grid-template-columns: 35fr 65fr;
  grid-template-rows: 50% 50%;
  margin: 0 auto;
  max-width: var(--containerXLarge);
  padding: 0 1rem;
  transform: translateY(-5rem);
  width: 100%;

  ${media.md`
    grid-row: 1;
    padding: 0 5rem;
    margin: 6.5rem auto 50rem;
  `}
`

const Content = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 1;
  margin: 0 auto;
  max-width: var(--containerLarge);
  position: relative;
  z-index: var(--zFront);

  ${media.md`
    align-self: start;
    left: 0;
    position: sticky;
    right: 0;
    top: 25%;
  `}

  h1 {
    @media (max-width: 640px) {
      font-size: 1.75rem;
    }
  }
`
