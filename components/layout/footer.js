import React from "react"
import styled from "styled-components"

import { media } from "@utils/media"
import { LinkInternal, LinkExternal } from "@components/links"
import { Container, Section } from "@components/layout"
import { Paragraph, Heading } from "@components/type"
import SocialLinks from "@components/socialLinks"

import WallflowerLogo from "assets/logoWallflower.svg"

const Footer = () => (
  <FooterWrapper>
    <Section>
      <Primary flex spaceBetween>
        <Wallflower>
          <Logo>
            <WallflowerLogo />
          </Logo>
          <Content>
            <Heading html="h3" level="h3">
              Wallflower
            </Heading>
            <Paragraph level="sm">
              We make simple, ethically sourced, handcrafted accessories for
              women.
            </Paragraph>
            <LinkExternal href="https://www.etsy.com/shop/GetWallflower">
              Shop Collection
            </LinkExternal>
          </Content>
        </Wallflower>
        <Navigation>
          <NavGroup>
            <NavLink>
              <LinkInternal href="/posts">Posts</LinkInternal>
            </NavLink>
            <NavLink>
              <LinkInternal href="/lifestyle">Lifestyle</LinkInternal>
            </NavLink>
            <NavLink>
              <LinkInternal href="/fashion">Fashion</LinkInternal>
            </NavLink>
            <NavLink>
              <LinkInternal href="/beauty">Beauty</LinkInternal>
            </NavLink>
            <NavLink>
              <LinkInternal href="/home">Home</LinkInternal>
            </NavLink>
            <NavLink>
              <LinkInternal href="/travel">Travel</LinkInternal>
            </NavLink>
          </NavGroup>
          <NavGroup>
            <NavLink>
              <LinkInternal href="/about">About</LinkInternal>
            </NavLink>
            <NavLink>
              <LinkInternal href="/about/faq">FAQ</LinkInternal>
            </NavLink>
            <NavLink>
              <LinkInternal href="/about#contact">Contact</LinkInternal>
            </NavLink>
          </NavGroup>
          <NavGroup>
            <NavLink>
              <LinkInternal href="/shop">Shop</LinkInternal>
            </NavLink>
            <NavLink>
              <LinkInternal href="/shop/home-essentials">Home</LinkInternal>
            </NavLink>
            <NavLink>
              <LinkInternal href="/shop/office-&-workspace">
                Office
              </LinkInternal>
            </NavLink>
            <NavLink>
              <LinkInternal href="/shop/in-my-wardrobe">Wardrobe</LinkInternal>
            </NavLink>
          </NavGroup>
        </Navigation>
      </Primary>
      <Secondary flex spaceBetween alignCenter>
        <SocialLinks />
        <Paragraph level="sm" noMargin>
          All rights reserved — 2022 © Some Pretty Thing
        </Paragraph>
      </Secondary>
    </Section>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.footer`
  padding: 2rem 0;
`

const Primary = styled(Container)`
  margin-bottom: 4rem;

  ${media.md`
    margin-bottom: 8rem;
  `}
`

const Secondary = styled(Container)`
  flex-direction: column;

  ${media.md`
    flex-direction: row;
  `}

  p {
    color: var(--gray60);
    font-size: 14px;
    padding: 0.5rem 0;
  }
`

const Wallflower = styled.div`
  align-items: center;
  border: 1px solid var(--gray20);
  display: flex;
  margin: 0 auto;
  padding: 2.5rem;

  ${media.md`
    max-width: 480px;
    margin: initial;
  `}
`

const Logo = styled.div`
  flex-basis: auto;
  width: 40px;
  margin-right: 2rem;
`

const Content = styled.div`
  flex-basis: auto;
  width: calc(100% - 40px);
`

const Navigation = styled.div`
  display: none;
  margin-bottom: 4rem;

  ${media.md`
  display: flex;

  `}
`
const NavGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding-right: 3.5rem;

  &:last-of-type {
    padding-right: 0;
  }
`

const NavLink = styled.li`
  margin-bottom: 0.5rem;
  font-family: var(--paragraphFamily);
  font-size: 0.95rem;
  font-weight: var(--paragraphWeight);
  line-height: var(--paragraphLeading);

  a {
    color: var(--gray100);
  }

  &:first-of-type {
    margin-bottom: 1rem;

    a {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.85rem;
    }
  }
`
