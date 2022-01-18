import Link from "next/link"
import React, { useState, useRef } from "react"

import Logo from "@components/logo"
import { styled } from "stitches.config"

export default function Navigation() {
  const navigation = useRef()
  const [navState, setNavState] = useState(false)

  const toggleNavState = () => {
    setNavState(!navState)
  }

  return (
    <Nav>
      <Background />
      <BackgroundBump width="400" height="20" viewBox="0 0 400 20">
        <path
          fill="#fff"
          d="M50 0c99 0 99 18 153.804 18C269 18 269 0 370 0H50z"
        ></path>
      </BackgroundBump>

      <Hamburger
        viewBox="0 0 100 100"
        width="80"
        onClick={toggleNavState}
        state={navState === true ? "active" : "inactive"}
      >
        <HamburgerTopLine
          state={navState === true ? "active" : "inactive"}
          d="M30 33h40s9.044-.655 9.044-8.509-8.024-11.958-14.9-10.859C57.27 14.731 50.009 17.804 50.009 30v42"
        />
        <HamburgerBottomLine d="M30 50h40" />
      </Hamburger>

      <LogoWrapper aria-label="Some Pretty Thing Logo">
        <Logo />
      </LogoWrapper>

      <NavLinks state={navState === true ? "active" : "inactive"}>
        <NavLinksGroup>
          <NavLink>
            <Link href="/" passHref={true}>
              <ALink>Lifestyle</ALink>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref={true}>
              <ALink>Fashion</ALink>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref={true}>
              <ALink>Beauty</ALink>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref={true}>
              <ALink>Home</ALink>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref={true}>
              <ALink>Travel</ALink>
            </Link>
          </NavLink>
        </NavLinksGroup>

        <NavLinksGroup>
          <NavLink>
            <Link href="/" passHref={true}>
              <ALink>Newsletter</ALink>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref={true}>
              <ALink>About</ALink>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref={true}>
              <ALink>Shop</ALink>
            </Link>
          </NavLink>
        </NavLinksGroup>
      </NavLinks>
    </Nav>
  )
}

const Nav = styled("nav", {
  alignItems: "center",
  display: "flex",
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  padding: 0,
  margin: "0 auto",
  width: "100%",
  height: "80px",
  zIndex: 90,
})

const Background = styled("div", {
  background: "white",
  left: 0,
  right: 0,
  top: 0,
  width: "100vw",
  height: "80px",
  zIndex: 90,
  position: "absolute",
})

const BackgroundBump = styled("svg", {
  display: "none",

  "@mediaSm": {
    display: "block",
    bottom: "-20px",
    content: " ",
    left: 0,
    right: 0,
    margin: "0 auto",
    position: "absolute",
    zIndex: 90,
  },
})

const Hamburger = styled("svg", {
  height: "5rem",
  width: "5rem",
  position: "fixed",
  right: 0,
  top: 0,
  zIndex: 100,
  cursor: "pointer",
  strokeDasharray: "40 139",
  transition: "$transitionBase",
  userSelect: "none",
  transform: "translateY(0.5rem)",

  "@mediaSm": {
    display: "none",
  },

  variants: {
    state: {
      active: {
        transform: "rotate(45deg)",
      },
    },
  },
})

const HamburgerTopLine = styled("path", {
  fill: "none",
  stroke: "$gray100",
  strokeLinecap: "square",
  strokeWidth: "0.25rem",
  transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms",
  strokeDasharray: "40 139",

  variants: {
    state: {
      active: {
        strokeDashoffset: "-99px",
      },
      inactive: {
        strokeDashoffset: "0px",
      },
    },
  },
})

const HamburgerBottomLine = styled("path", {
  fill: "none",
  stroke: "$gray100",
  strokeLinecap: "square",
  strokeWidth: "0.25rem",
  transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms",
})

const LogoWrapper = styled("a", {
  lineHeight: "0",
  padding: "0 1rem",
  zIndex: 100,

  "@mediaSm": {
    margin: "0 auto",
  },
})

const NavLinks = styled("div", {
  alignItems: "center",
  background: "$red20",
  flexDirection: "column",
  height: "100vh",
  padding: "5rem 0 0 0",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  width: "100vw",
  maxWidth: "100vw",
  zIndex: 90,

  "@mediaSm": {
    background: "transparent",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    justifyContent: "space-between",
    padding: "0 1rem 0 1rem",
  },

  variants: {
    state: {
      active: { display: "flex" },
      inactive: {
        display: "none",

        "@mediaSm": {
          display: "flex",
        },
      },
    },
  },
})

const NavLinksGroup = styled("ul", {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  margin: 0,
  padding: 0,
  width: "100%",

  "@mediaMd": {
    flexDirection: "row",
    width: "auto",
  },
})

const NavLink = styled("li", {
  display: "inline-block",
  position: "relative",
  margin: "0.5rem 1rem",
  zIndex: 90,

  "&:before": {
    backgroundColor: "$red60",
    borderRadius: "0.25rem",
    content: " ",
    height: "0.25rem",
    width: "0.25rem",
    left: 0,
    margin: "0 auto",
    opacity: 0,
    position: "absolute",
    right: 0,
    left: 0,
    top: "0.5rem",
    transition: "$transitionBase",
  },

  "&:hover": {
    "&:before": {
      opacity: 1,
      transform: "translateY(-1.125rem)",
    },
  },

  "@mediaMd": {
    fontSize: "0.9rem",
    margin: "0.5rem 1rem 0.5rem 0",
  },

  variants: {
    version: {
      hidden: {},
      shop: {},
      newsletter: {},
    },
  },
})

const ALink = styled("a", {
  color: "$gray100",
  textDecoration: "none",
  fontSize: "2rem",
  fontFamily: "$paragraph",
  fontWeight: "400",
  lineHeight: "135%",

  "@mediaMd": {
    fontSize: "0.875rem",
  },
})
