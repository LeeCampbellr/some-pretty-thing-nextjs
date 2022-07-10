import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { Heading } from "@components/type"

export const Button = styled.button`
  appearance: none;
  background-color: var(--red40);
  border: none;
  color: var(--gray100);
  padding: 0.5rem 2rem;
  font-family: var(--paragraphFamily);
  font-size: 0.875rem;
  letter-spacing: 2px;
  outline: none;
  text-align: center;
  text-transform: uppercase;
  transition: var(--transitionBase);
  width: auto;

  &:hover {
    background-color: var(--red60);
    filter: brightness(105%);
  }

  &:focus {
    outline: none;
  }
`

export const LinkInternal = styled(Link)`
  color: var(--gray100);
  display: inline-block;
  font-family: var(--paragraphFamily);
  font-size: 0.95rem;
  font-weight: var(--paragraphWeight);
  line-height: var(--paragraphLeading);
  position: relative;
`

export const LinkExternal = styled.a`
  color: var(--gray100);
  display: inline-block;
  font-family: var(--paragraphFamily);
  font-size: 0.95rem;
  font-weight: var(--paragraphWeight);
  line-height: var(--paragraphLeading);
  position: relative;
`

const Arrow = ({ to, nested, text, light, ...props }) => {
  return (
    <>
      {nested ? (
        <div {...props}>
          <Heading html="h6" level="h6" noMargin lower="true">
            {text}
          </Heading>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="10"
            fill="none"
            viewBox="0 0 24 10"
          >
            <path
              stroke="#111"
              d="M0 5.026h24m0 0c-3.5-.571-7-1.74-9-4.026m9 4.026c-3.5.572-7 1.688-9 3.974"
            ></path>
          </svg>
        </div>
      ) : (
        <a href={to} {...props}>
          <Heading html="h6" level="h6" noMargin lower="true">
            {text}
          </Heading>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="10"
            fill="none"
            viewBox="0 0 24 10"
          >
            <path
              stroke="#111"
              d="M0 5.026h24m0 0c-3.5-.571-7-1.74-9-4.026m9 4.026c-3.5.572-7 1.688-9 3.974"
            ></path>
          </svg>
        </a>
      )}
    </>
  )
}

export const LinkArrow = styled(Arrow)`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  margin-top: 2rem;
  position: relative;
  transition: var(--transitionBase);

  &:before {
    background-color: ${(props) =>
      props.light ? "var(--red40)" : "var(--red20)"};
    border-radius: 2rem;
    bottom: 0;
    content: "";
    height: 24px;
    margin: auto;
    position: absolute;
    ${(props) => (props.reverse ? "left: -0.4rem;" : "right: -0.4rem;")};
    top: 0;
    transform: scale(0);
    transition: var(--transitionBase);
    width: 24px;
    z-index: -1;
  }

  h6 {
    color: ${(props) => (props.light ? "var(--gray20)" : "var(--gray80)")};
    margin: 0;
  }

  svg {
    display: inline-block;
    ${(props) =>
      props.reverse ? "margin-right: 0.675rem;" : "margin-left: 0.675rem;"};
    transform: ${(props) => (props.reverse ? "rotate(180deg)" : "intial")};

    path {
      stroke: ${(props) => (props.light ? "var(--gray20)" : "var(--gray80)")};
      transition: var(--transitionBase);
    }
  }

  &:hover {
    &:before {
      transform: scale(1);
    }

    h6 {
      color: ${(props) => (props.light ? "var(--gray00)" : "var(--gray100)")};
    }
    svg path {
      stroke: ${(props) => (props.light ? "var(--gray00)" : "var(--gray100)")};
    }
  }
`

const Section = ({ linkSection, link, text, ...props }) => (
  <Link href={link}>
    <SectionLink className={`a-sectionLink -${linkSection}`}>
      <Background></Background>
      <Heading html="h6" level="h6" noMargin lower>
        {text}
      </Heading>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="10"
        fill="none"
        viewBox="0 0 24 10"
      >
        <path
          stroke="#111"
          d="M0 5.026h24m0 0c-3.5-.571-7-1.74-9-4.026m9 4.026c-3.5.572-7 1.688-9 3.974"
        ></path>
      </svg>
    </SectionLink>
  </Link>
)

const Background = styled.div`
  background-color: var(--red20);
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: var(--transitionBase);
  width: 100%;
  z-index: var(--zLost);
`

const SectionLink = styled.a`
  align-items: center;
  border-bottom: var(--borderBase);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: center;
  position: relative;
  transition: var(--transitionBase);
  width: 100%;

  h6 {
    color: var(--gray60);
    transform: translateY(0.5px);
    text-transform: capitalize;
  }

  svg {
    margin-left: 1rem;

    path {
      stroke: var(--gray60);
      transition: var(--transitionBase);
    }
  }

  &:hover {
    border-color: var(--red20);

    h6 {
      color: var(--gray100);
    }

    svg {
      path {
        stroke: var(--gray100);
      }
    }

    ${Background} {
      transform: scaleY(1);
    }
  }
`

export const LinkSection = styled(Section)``
