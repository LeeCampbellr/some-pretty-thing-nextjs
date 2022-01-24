import React, { useState, useRef } from "react"
import styled from "styled-components"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import {
  disablePageScroll,
  enablePageScroll,
  clearQueueScrollLocks,
} from "scroll-lock"

import Logo from "@components/logo"
import { Container } from "@components/layout"
// import NavigationAbout from
import { media } from "@utils/media"

const Navigation = () => {
  const navigation = useRef()
  const [nav, setNav] = useState(false)
  const toggleNav = () => {
    setNav(!nav)
    nav === true ? enablePageScroll(navigation) : disablePageScroll(navigation)
  }

  const [aboutNav, setAboutNav] = useState(false)
  const toggleAboutNav = (event) => {
    if (window.innerWidth > 1200) {
      event.preventDefault()
      setAboutNav(!aboutNav)
    } else {
      clearQueueScrollLocks(navigation)
      enablePageScroll(navigation)
    }
  }

  const resetScroll = () => {
    clearQueueScrollLocks(navigation)
    enablePageScroll(navigation)
  }

  return (
    <NavigationContainer ref={navigation}>
      {/* <NavigationAbout show={aboutNav} /> */}
      <NavigationBackground />
      <Hamburger>
        <svg
          onClick={toggleNav}
          className={nav === true ? "active" : ""}
          viewBox="0 0 100 100"
          width="80"
        >
          <path
            d="M30 33h40s9.044-.655 9.044-8.509-8.024-11.958-14.9-10.859C57.27 14.731 50.009 17.804 50.009 30v42"
            className="line top"
          />
          <path d="M30 50h40" className="line middle" />
        </svg>
      </Hamburger>
      <NavLogo href="/" aria-label="Some Pretty Thing Logo">
        <a>
          <Logo />
        </a>
      </NavLogo>
      <NavigationLinks flex className={nav === true ? "-active" : ""}>
        <ul>
          <NavLink>
            <Link
              activeClassName="-active"
              href="/christmas"
              onClick={resetScroll}
            >
              <a>Holiday</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link
              activeClassName="-active"
              href="/lifestyle"
              onClick={resetScroll}
            >
              <a>Lifestyle</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link
              activeClassName="-active"
              href="/fashion"
              onClick={resetScroll}
            >
              <a>Fashion</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link
              activeClassName="-active"
              href="/beauty"
              onClick={resetScroll}
            >
              <a>Beauty</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link activeClassName="-active" href="/home" onClick={resetScroll}>
              <a>Home</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link
              activeClassName="-active"
              href="/travel"
              onClick={resetScroll}
            >
              <a>Travel</a>
            </Link>
          </NavLink>
        </ul>
        <ul>
          <NavLink>
            <ScrollLink
              href="newsletter"
              smooth={true}
              spy={true}
              offset={-200}
              className="-newsletter"
            >
              <a>Newsletter</a>
            </ScrollLink>
          </NavLink>
          <NavLink>
            <Link
              activeClassName="-active"
              className={aboutNav === true ? "active" : ""}
              onClick={toggleAboutNav}
              href="/about"
            >
              <a>About</a>
            </Link>
          </NavLink>
          <NavLink className="-hide">
            <Link onClick={resetScroll} href="/about/press">
              <a>Press</a>
            </Link>
          </NavLink>
          <NavLink className="-shop">
            <Link activeClassName="-active" href="/shop" onClick={resetScroll}>
              <a>Shop</a>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="#111"
                fillRule="evenodd"
                d="M3.75 1.875a1.25 1.25 0 012.5 0V2.5h-2.5v-.625zm-.625 1.25v1.25h.625v-1.25h2.5v1.25h.625v-1.25h.977l.853 6.25h-7.41l.853-6.25h.977zm0-.625v-.625a1.875 1.875 0 013.75 0V2.5h1.523L9.42 10H.58l1.022-7.5h1.523z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
        </ul>
      </NavigationLinks>
      <NavigationBump
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="20"
        fill="none"
        viewBox="0 0 400 20"
      >
        <path
          fill="#fff"
          d="M50 0c99 0 99 18 153.804 18C269 18 269 0 370 0H50z"
        ></path>
      </NavigationBump>
    </NavigationContainer>
  )
}

export default Navigation

const NavigationContainer = styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 80px;
  left: 0;
  margin: 0 auto;
  padding: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: var(--zTop);
`

const NavigationBackground = styled.div`
  background: white;
  left: 0;
  height: 80px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: var(--zTop);
`

const NavigationBump = styled.svg`
  ${media.md`
    bottom: -20px;
    content: "";
    display: block;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    z-index: var(--zTop);
  `}
`

const Hamburger = styled.div`
  height: 80px;
  position: fixed;
  right: 0;
  top: 0;
  width: 80px;
  z-index: var(--zCursor);

  ${media.md`
    display: none;
  `}

  svg {
    cursor: pointer;
    stroke-dasharray: 0;
    stroke-dasharray: 40 139;
    transition: transform 400ms;
    user-select: none;
    transform: translateY(0.5rem);

    .line {
      fill: none;
      stroke: var(--gray100);
      stroke-linecap: square;
      stroke-width: 4;
      transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    }

    .top {
      stroke-dasharray: 0;
      stroke-dasharray: 40 139;
    }

    &.active {
      transform: rotate(45deg);

      .top {
        stroke-dashoffset: -99px;
      }
    }
  }
`

const NavLogo = styled(Link)`
  line-height: 0;
  padding: 0 1rem;
  z-index: var(--zTest);

  ${media.md`
    margin: 0 auto;
  `}
`

const NavigationLinks = styled(Container)`
  align-items: center;
  background-color: var(--red20);
  display: none;
  flex-direction: column;
  height: 100vh;
  left: 0;
  padding-top: var(--spacingXLarge);
  position: absolute;
  max-width: none;
  top: 0;
  width: 100vw;
  z-index: var(--zTop);

  ${media.md`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    height: 80px;
    justify-content: space-between;
    padding: var(--spacingSection);
    padding-top: 0;
  `}

  &.-active {
    display: flex;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    ${media.md`
      flex-direction: row;
      width: auto;
    `}
  }
`

const NavLink = styled.li`
  position: relative;

  &.-hide {
    ${media.sm`
      display:none;
    `}
  }

  a {
    color: var(--paragraphColor);
    display: inline-flex;
    align-items: center;
    font-family: var(--paragraphFamily);
    font-size: 2rem;
    font-weight: var(--paragraphWeight);
    line-height: var(--paragraphLeading);
    margin: 0.5rem 1rem;
    position: relative;
    text-decoration: none;
    z-index: var(--z-top);

    ${media.md`
      font-size: 0.9rem;
      margin: 0.5rem 1rem 0.5rem 0;
    `}

    &:before {
      background-color: var(--red60);
      border-radius: 4px;
      content: "";
      height: 4px;
      left: 0;
      margin: 0 auto;
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0.5rem;
      transition: var(--transitionBase);
      width: 4px;
    }

    &:hover,
    &.-active {
      &:before {
        opacity: 1;
        transform: translateY(-1.125rem);
      }
    }

    &.-newsletter {
      display: none;

      &:hover {
        cursor: pointer;
      }

      ${media.md`
        display: inherit;
      `}
    }

    .christmas {
      width: 14px;

      &:nth-of-type(1) {
        margin-right: 6px;
      }
      &:nth-of-type(2) {
        margin-left: 4px;
      }
    }
  }

  &.-shop {
    ${media.md`
      border-left: var(--borderBase);
      margin-left: 0.5rem;
      padding-left: 1rem;
    `}

    svg {
      display: none;

      ${media.md`
            display: inline-block;
          `}
    }
  }
`
