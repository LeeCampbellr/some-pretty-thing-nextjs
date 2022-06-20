import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

import { Heading } from "@components/type"
import { media } from "@utils/media"

const NavigationFAQ = () => {
  return (
    <Aside>
      <Heading html="h6" level="sh">
        Index
      </Heading>
      <ul>
        <li>
          <FAQLink
            to="beginning"
            activeClass="-active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            01. From the Beginning
          </FAQLink>
        </li>
        <li>
          <FAQLink
            to="gear"
            activeClass="-active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            02. Gear Guide
          </FAQLink>
        </li>
        <li>
          <FAQLink
            to="personal"
            activeClass="-active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            03: Let’s Get Personal
          </FAQLink>
        </li>
        <li>
          <FAQLink
            to="blogging"
            activeClass="-active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            04: Let’s Talk Blogging
          </FAQLink>
        </li>
      </ul>
    </Aside>
  )
}

export default NavigationFAQ

const Aside = styled.aside`
  display: none;
  left: 0;
  position: sticky;
  top: 200px;

  ${media.sm`
    display: block;
  `}

  ul {
    margin-top: 1rem;
  }
  li {
    padding-bottom: 1rem;
  }
`

const FAQLink = styled(Link)`
  color: var(--gray100);
  display: inline-block;
  position: relative;
  transition: var(--transitionBase);

  &:before {
    background-color: var(--red20);
    bottom: 0;
    content: "";
    height: 0.75rem;
    position: absolute;
    right: 0;
    transform: translateX(0.5rem);
    transform-origin: top center;
    transition: var(--transitionBase);
    width: 100%;
    z-index: var(--zLost);
  }

  &:hover {
    cursor: pointer;

    &:before {
      transform: scale(1.1, 0.5) translate(0rem, -0.45rem);
    }
  }

  &.-active {
    color: var(--gray-100);
    transform: translateX(0.5rem);

    &:before {
      transform: scale(1.1, 0.5) translate(0rem, -0.45rem);
    }
  }
`
