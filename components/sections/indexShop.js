import React from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

import { Section, Container } from "@components/layout"
import { LinkSection } from "@components/links"
import { Heading } from "@components/type"
import { media } from "@utils/media"

import HomeImage from "assets/indexShop/home.png"
import OfficeImage from "assets/indexShop/office.png"
import ClosetImage from "assets/indexShop/closet.png"

const SectionShop = () => {
  return (
    <Section lgTop full>
      <Section>
        <Title>
          <Heading html="h1" level="huge" center>
            Shop By Collection
          </Heading>
        </Title>
        <Shop grid gridThree alignCenter lg>
          <Link href="/home-essentials">
            <ShopCard>
              <Heading html="h2" level="h2">
                Home Essentials
              </Heading>
              <ImageWrapper>
                <div>
                  <Image src={HomeImage} />
                </div>
              </ImageWrapper>
            </ShopCard>
          </Link>
          <Link href="/office-&-workspace">
            <ShopCard>
              <Heading html="h2" level="h2">
                Office & Workspace
              </Heading>
              <ImageWrapper>
                <div>
                  <Image src={OfficeImage} />
                </div>
              </ImageWrapper>
            </ShopCard>
          </Link>
          <Link href="/in-my-wardrobe">
            <ShopCard>
              <Heading html="h2" level="h2">
                In My Wardrobe
              </Heading>
              <ImageWrapper>
                <div>
                  <Image src={ClosetImage} />
                </div>
              </ImageWrapper>
            </ShopCard>
          </Link>
        </Shop>
      </Section>

      <LinkSection link="/shop" text="Shop All Collections" />
    </Section>
  )
}

export default SectionShop

const Title = styled.div`
  margin: 0 auto;
  max-width: var(--containerMedium);
`

const Shop = styled(Container)`
  margin-top: 1rem;

  ${media.sm`
    margin-top: -2.5rem;
  `}

  ${media.md`
    margin-top: -4.5rem;
  `}
`

const ImageWrapper = styled.div`
  background-color: var(--red20);
  height: 100%;
  width: 100%;
  padding: 2.5rem 2.5rem 3.5rem;

  div {
    transition: var(--transitionLong);
    position: relative;

    &:after {
      background-color: rgba(0, 0, 0, 0.1);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: var(--transitionLong);
      width: 100%;
    }

    img {
      transition: var(--transitionLong) !important;
    }
  }

  &:hover {
    div {
      transform: scale(0.85);

      &:after {
        background-color: rgba(0, 0, 0, 0);
      }

      img {
        transform: scale(1.25);
      }
    }
  }
`

const ShopCard = styled.a`
  cursor: pointer;
  align-items: flex-end;
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;

  h2 {
    padding: 2rem;
    position: absolute;
    margin: 0;
    text-align: center;
    width: 100%;
    z-index: var(--zFront);
  }
`
