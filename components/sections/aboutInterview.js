import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import { Button } from "@components/links"
import { Container, Section } from "@components/layout"
import { Heading } from "@components/type"

import ImageInterview from "public/images/about/interview.jpg"

const SectionInterview = () => {
  const interviewImage = useRef(null)
  const interviewWrapper = useRef(null)
  const parallax = useRef(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function () {
        gsap.fromTo(
          interviewImage.current,
          {
            scaleX: "1.25",
          },
          {
            scrollTrigger: {
              trigger: interviewImage.current,
              start: "top bottom",
              end: "center center",
              scrub: 0.75,
              toggleActions: "play none none none",
            },
            scaleX: "1",
          }
        )
        gsap.fromTo(
          interviewWrapper.current,
          {
            scaleX: "0.75",
          },
          {
            scrollTrigger: {
              trigger: interviewImage.current,
              start: "top bottom",
              end: "center center",
              scrub: 0.75,
              toggleActions: "play none none none",
            },
            scaleX: "1",
          }
        )
        gsap.fromTo(
          parallax.current,
          {
            y: "0",
          },
          {
            scrollTrigger: {
              trigger: parallax.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.75,
              toggleActions: "play none none none",
            },
            y: "-30%",
          }
        )
      },
    })
  }, [])

  return (
    <Section xl full>
      <Interview grid alignCenter ref={interviewWrapper}>
        <ImageWrapper ref={interviewImage}>
          <div ref={parallax}>
            <Image src={ImageInterview} />
          </div>
        </ImageWrapper>
        <Content>
          <Heading html="h1" level="big" center light>
            <i>An Interview with Emily</i>
          </Heading>
          <Info>
            <Link href="faq">Learn More</Link>
          </Info>
        </Content>
      </Interview>
    </Section>
  )
}

export default SectionInterview

const Interview = styled(Container)`
  grid-template-rows: 1fr;
  max-height: 800px;
  overflow: hidden;
  transform-origin: center;

  div {
    grid-row: 1;
    grid-column: 1;
  }
`

const ImageWrapper = styled.div`
  max-height: 800px;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: var(--zFront);
`

const Info = styled(Button)`
  a {
    color: var(--gray100);
  }
`
