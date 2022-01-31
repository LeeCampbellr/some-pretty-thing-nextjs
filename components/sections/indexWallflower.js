import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import { Container, Section } from "@components/layout"
import { Heading } from "@components/type"
import { LinkArrow } from "@components/links"

import WallflowerLogo from "assets/logoWallflowerFull.svg"

const IndexWallflower = () => {
  const images = useRef(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
    gsap.fromTo(
      images.current,
      {
        x: "20%",
      },
      {
        scrollTrigger: {
          trigger: images.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.75,
          toggleActions: "play none none none",
        },
        x: "-20%",
      }
    )
  }, [])

  return (
    <Wallflower bg mgTop>
      <TitleContainer containerMedium flex alignCenter flexColumn>
        <Logo>
          <WallflowerLogo />
        </Logo>
        <Heading html="h1" level="h1" center>
          Elegant & handcrafted hair accessories
        </Heading>
      </TitleContainer>

      <ImagesContainer ref={images} grid sm>
        <Image src="/images/wallflower/wf-1.jpg" width="320" height="480" />
        <Image src="/images/wallflower/wf-2.jpg" width="240" height="360" />
        <Image src="/images/wallflower/wf-3.jpg" width="320" height="220" />
        <Image src="/images/wallflower/wf-4.jpg" width="240" height="360" />
        <Image src="/images/wallflower/wf-5.jpg" width="320" height="480" />
        <Image src="/images/wallflower/wf-6.jpg" width="240" height="360" />
        <Image src="/images/wallflower/wf-7.jpg" width="320" height="220" />
        <Image src="/images/wallflower/wf-8.jpg" width="240" height="360" />
        <Image src="/images/wallflower/wf-9.jpg" width="320" height="480" />
      </ImagesContainer>

      <Container containerMedium mg flex alignCenter flexColumn>
        <LinkArrow to="/wallflower" text="Learn More" />
      </Container>
    </Wallflower>
  )
}

export default IndexWallflower

const Logo = styled.div`
  width: 200px;
  margin: 0 auto;
  margin-bottom: var(--spacingSmall);
`

const Wallflower = styled(Section)`
  overflow: hidden;
`
const TitleContainer = styled(Container)`
  z-index: var(--zFront);
`

const ImagesContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  grid-template-columns: 320px 240px 320px 240px 320px 240px 320px 240px 320px;
  gap: 2.5rem;
  margin-top: -5%;
`
