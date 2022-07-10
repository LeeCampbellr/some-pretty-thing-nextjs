import React, { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"
import Slider from "react-slick"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"
gsap.registerPlugin(DrawSVGPlugin)

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import InfoPost from "@components/post/postInfo"
import { Section, Container } from "@components/layout"
import { LinkSection } from "@components/links"
import { Heading } from "@components/type"
import { media } from "@utils/media"

const SectionPostsTravel = ({ posts }) => {
  const travelSlider = useRef()
  const circle = useRef()

  const settings = {
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(DrawSVGPlugin)
    }
    gsap.set(".circle-top", { drawSVG: "0% 100%", transformOrigin: "50% 50%" })
  }, [])

  const onArrow = (e) => {
    const circle = e.target.querySelector(".circle-top")
    gsap.fromTo(circle, 0.8, { drawSVG: "0% 100%" }, { drawSVG: "100% 100%" })
  }

  const offArrow = (e) => {
    const circle = e.target.querySelector(".circle-top")
    gsap.fromTo(circle, 0.8, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  }

  return (
    <Section lgTop full>
      <Container md section grid gridTwo containerXLarge alignStart>
        <div>
          <TravelHeading html="h2" level="h2">
            Oh the places we&apos;ve been. Travel & city guides
          </TravelHeading>
          <SliderNav>
            <SliderButton
              onClick={(e) => {
                travelSlider.current.slickPrev()
              }}
              onMouseEnter={onArrow}
              onMouseLeave={offArrow}
            >
              <Circle>
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="#302F30"
                  strokeWidth="1"
                  className="circle-bottom"
                ></circle>
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="#A6A6A6"
                  strokeWidth="1"
                  className="circle-top"
                ></circle>
              </Circle>
              <Arrow
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 28 28"
              >
                <path fill="#fff" d="M0 0H28V28H0z"></path>
                <path
                  stroke="#111"
                  d="M26 13.974H2m0 0c3.5.571 7 1.74 9 4.026m-9-4.026c3.5-.572 7-1.688 9-3.974"
                ></path>
              </Arrow>
            </SliderButton>
            <SliderButton
              onClick={(e) => {
                travelSlider.current.slickNext()
              }}
              onMouseEnter={onArrow}
              onMouseLeave={offArrow}
            >
              <Circle>
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="#302F30"
                  strokeWidth="1"
                  className="circle-bottom"
                ></circle>
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="#A6A6A6"
                  strokeWidth="1"
                  className="circle-top"
                ></circle>
              </Circle>
              <Arrow
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 28 28"
              >
                <path fill="#fff" d="M0 0H28V28H0z"></path>
                <path
                  stroke="#111"
                  d="M2 14.026h24m0 0c-3.5-.571-7-1.74-9-4.026m9 4.026c-3.5.572-7 1.688-9 3.974"
                ></path>
              </Arrow>
            </SliderButton>
          </SliderNav>
        </div>
        <TravelLinks>
          <Tlink>
            <Link href="/a-2-day-guide-to-visiting-atlanta">
              Atlanta&#44; GA
            </Link>
          </Tlink>
          <Tlink>
            <Link href="/downtown-seattle-and-pikes-place-market">
              Seattle&#44; WA
            </Link>
          </Tlink>
          <Tlink>
            <Link href="/bonjour-new-york-nyc-diary-day-1/ ">
              New York&#44; NY
            </Link>
          </Tlink>
          <Tlink>
            <Link href="/spending-time-at-hotel-vintage-in-portland/">
              Portland&#44; OR
            </Link>
          </Tlink>
          <Tlink>
            <Link href="/48-hours-in-charleston-south-carolina/">
              Charleston&#44; SC
            </Link>
          </Tlink>
          <Tlink>
            <Link href="/recapping-nashville/ ">Nashville&#44; TN</Link>
          </Tlink>
          <Tlink>
            <Link href="/with-love-from-lake-lure/ ">Lake Lure&#44; NC</Link>
          </Tlink>
          <Tlink>
            <Link href="/travel">All Travel Posts</Link>
          </Tlink>
        </TravelLinks>
      </Container>
      <Container lg>
        <TravelSlider {...settings} ref={travelSlider}>
          {posts.map((post, index) => (
            <Link href={`/${post.slug}`} key={index}>
              <a>
                <ImageWrapper>
                  {post.featuredImage && (
                    <Image
                      loading="lazy"
                      src={post.featuredImage[0].url}
                      alt={post.featuredImage[0].title}
                      width={post.featuredImage[0].width}
                      height={post.featuredImage[0].height}
                    />
                  )}
                </ImageWrapper>
                <div>
                  <InfoPost date={post.postDate} categories={post.categories} />
                  <Heading html="h2" level="h3">
                    {post.title}
                  </Heading>
                </div>
              </a>
            </Link>
          ))}
        </TravelSlider>
      </Container>
      <LinkSection link="/travel" text="All Travel Posts" />
    </Section>
  )
}

export default SectionPostsTravel

const TravelHeading = styled(Heading)`
  max-width: 32rem;
`

const SliderNav = styled.div`
  display: none;

  ${media.sm`
    display: flex;
  `}
`

const Circle = styled.svg`
  height: 48px;
  left: 0;
  position: absolute;
  transition: var(--transitionShort);
  top: 0;
  width: 48px;

  .circle-top {
    z-index: 2;
  }

  .circle-bottom {
    z-index: 1;
  }
`

const Arrow = styled.svg`
  height: 20px;
  transition: var(--transitionShort);
  width: 20px;
`

const SliderButton = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: center;
  margin-right: 1rem;
  position: relative;
  transition: var(--transitionShort);
  vertical-align: middle;
  width: 48px;
  z-index: var(--zFront);

  &:hover {
    ${Circle} {
      transform: scale(0.95);
    }
  }

  &:active {
    ${Circle} {
      transform: scale(0.9);
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 2rem;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((4 / 3) * 100%);
  }

  > img {
    bottom: 0;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: center;
    transition: var(--transitionStrong);
    width: 100%;
  }

  &:hover {
    img {
      transform: scale(1.075);
    }
  }
`

const TravelSlider = styled(Slider)`
  padding-left: var(--spacingSlider);
  max-width: 100vw;
  overflow: hidden;

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    padding-right: var(--spacingGutter);
    width: 40rem;

    ${media.sm`
      width: 50rem;
      `}

    &:nth-of-type(2n) {
      width: 36rem;

      ${media.sm`
          width: 42rem;

        `}
    }
  }
`

const TravelLinks = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 32rem;
  list-style: none;

  ${media.sm`
    justify-self: end;
    justify-content: flex-end;
  `}
`

const Tlink = styled.li`
  list-style: none;
  background-color: transparent;
  border-bottom: var(--borderBase);
  margin: 0 0.75rem 0.75rem 0;
  padding: 0.25rem 0.75rem;
  position: relative;
  transition: var(--transitionBase);

  a {
    color: var(--gray100);
    transition: var(--transitionBase);
    font-family: var(--paragraphFamily);
  }

  &:before {
    background-color: var(--red20);
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: var(--transitionBase);
    width: 100%;
    z-index: var(--zLost);
  }

  &:hover {
    border-color: transparent;

    &:before {
      transform: scaleY(1);
    }
  }
`
