import React from "react"
import styled from "styled-components"

import { media } from "@utils/media"

const SocialLinks = () => {
  return (
    <Social>
      <li>
        <Link href="https://www.instagram.com/emilyjlewandowski/">
          Instagram
        </Link>
      </li>
      <li>
        <Link href="https://www.pinterest.com/littlelew/pins/">Pinterest</Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/someprettything/">Facebook</Link>
      </li>
      <li>
        <Link href="https://twitter.com/emilylew">Twitter</Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/channel/UChgmwsttG2qzHhPPlva1auA">
          Youtube
        </Link>
      </li>
    </Social>
  )
}

export default SocialLinks

const Social = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 4rem;

  ${media.md`
    flex-direction: row;
    margin-bottom: 0;
  `}
`

const Link = styled.a`
  color: var(--gray100);
  display: inline-block;
  font-family: var(--paragraphFamily);
  font-size: 0.95rem;
  font-weight: var(--paragraphWeight);
  line-height: var(--paragraphLeading);
  position: relative;
  margin: 0.5rem 1rem 0.5rem 0;

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

  &:hover {
    &:before {
      opacity: 1;
      transform: translateY(-1.125rem);
    }
  }
`
