import React, { useState, useRef } from "react"
import { useRouter } from "next/router"
import styled from "styled-components"

import Arrow from "assets/icons/arrow.svg"
import { media } from "@utils/media"

const NavigationPostCategory = ({ category }) => {
  const router = useRouter()
  const dropdown = useRef()
  const [cat, setCat] = useState(false)
  const toggleDropdown = (event) => {
    setCat(!cat)
  }

  return (
    <Categories ref={dropdown} dropdown={cat} onClick={toggleDropdown}>
      {category.children.length > 0 ? (
        <React.Fragment>
          <Category
            href={`/category/${category.slug}`}
            className={
              router.asPath == `/category/${category.slug}` ? "-active" : ""
            }
          >
            All
          </Category>

          {category.children.map((category, index) => (
            <Category
              key={index}
              href={`/category/${category.slug}`}
              className={
                router.asPath == `/category/${category.uri}` ? "-active" : ""
              }
            >
              {category.title}
            </Category>
          ))}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Category href={`/category/${category.parent.slug}`}>All</Category>

          {category.parent.children.map((category, index) => (
            <Category
              key={index}
              href={`/category/${category.slug}`}
              className={
                router.asPath == `/category/${category.slug}` ? "-active" : ""
              }
            >
              {category.title}
            </Category>
          ))}
        </React.Fragment>
      )}
      <DropdownArrow active={cat.toString()} />
    </Categories>
  )
}

export default NavigationPostCategory

const Categories = styled.nav`
  align-items: center;
  border-bottom: 1px solid var(--gray80);
  display: flex;
  flex-direction: column;
  margin-top: var(--spacingMedium);
  margin-bottom: var(--spacingLarge);
  max-height: ${(props) => (props.dropdown === true ? "100rem" : "2.75rem")};
  overflow: hidden;
  position: relative;
  transition: var(--transitionBase);

  ${media.md`
    border: none;
    flex-direction: row;
    justify-content: center;
    max-height: none;
    overflow: initial;
  `}
`

const DropdownArrow = styled(Arrow)`
  height: 16px;
  position: absolute;
  right: 4px;
  top: 1.1rem;
  transition: var(--transitionBase);
  width: 16px;
  ${(props) => props.active === "true" && "transform: rotate(180deg);"}

  ${media.md`
    display: none;
  `}
`

const Category = styled.a`
  color: var(--gray60);
  font-size: 1.125rem;
  font-family: var(--paragraphFamily);
  margin: 1rem 1.25rem;
  position: relative;
  transition: var(--transitionBase);

  ${media.md`
    margin: 0 1.25rem;
    padding:  0;
  `}

  &:after {
    background-color: var(--gray100);
    bottom: -4px;
    left: -5%;
    content: "";
    height: 2px;
    opacity: 0;
    position: absolute;
    transition: var(--transitionBase);
    transform: translateY(6px);
    width: 110%;
  }

  &:hover {
    color: var(--gray--100);

    &:after {
      opacity: 1;
      transform: translateY(2px);
    }
  }

  ${media.md`
    &.-active {
      color: var(--gray--100);

      &:after {
        opacity: 1;
        transform: translateY(2px);
      }
    }
  `}
`
