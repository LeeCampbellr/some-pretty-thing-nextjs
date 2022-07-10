import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { CopyToClipboard } from "react-copy-to-clipboard"

import LinkIcon from "assets/icons/icon--link.svg"
import { Heading } from "@components/type"
import { media } from "@utils/media"

export default function PostSidebar({ sidebar }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const postProgress = document.querySelector(".a-sidebarProgress")
    const postHeight = document.querySelector(".o-postBody").clientHeight

    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (postHeight - document.documentElement.clientHeight)) *
        100

      if (scrollPercentage >= 100) {
        postProgress.style.height = "100%"
      } else {
        postProgress.style.height = scrollPercentage + "%"
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Sidebar>
      <Progress className="a-sidebarProgress" />

      <Share>
        <CopyToClipboard
          text={`https://someprettything.com/${sidebar.slug}`}
          onCopy={() => setCopied(true)}
        >
          <Copy>
            <Copied className={`${copied ? "-active" : ""}`}>
              Copied Link
            </Copied>
            <LinkIcon />
          </Copy>
        </CopyToClipboard>
      </Share>

      {sidebar.next && (
        <Link href={`/${sidebar.next.slug}`} passHref>
          <NextPost>
            <small className="heading-6">Next:</small>
            <Heading html="h4" level="p" noMargin>
              {sidebar.next.title}
            </Heading>
          </NextPost>
        </Link>
      )}
    </Sidebar>
  )
}

const Sidebar = styled.aside`
  align-items: center;
  display: none;
  flex-direction: column;
  border-left: var(--borderBase);
  height: calc(100vh - 6rem);
  padding: 2rem 0.25rem;
  position: sticky;
  top: 6rem;

  ${media.sm`
    display: flex;
  `}
`

const Progress = styled.div`
  background-color: var(--gray100);
  left: -1px;
  position: absolute;
  top: 0;
  width: 1px;
`

const Share = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  padding: 0.25rem;
  position: relative;
  transition: var(--transitionBase);
  width: 40px;

  &:before {
    border-radius: 40px;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    transition: var(--transitionBase);
    transform: scale(0);
    top: 0;
    width: 100%;
    z-index: -1;
  }

  svg {
    width: 16px;
  }

  &:hover {
    &:before {
      background-color: var(--red20);
      transform: scale(1);
    }
  }
`

const Copy = styled.div`
  line-height: 0;
`

const Copied = styled.span`
  background-color: var(--red20);
  border-radius: 2rem;
  bottom: 0.1rem;
  line-height: 100%;
  padding: 0.75rem 0.25rem;
  opacity: 0;
  position: absolute;
  right: 2rem;
  text-align: center;
  width: 140px;

  &.-active {
    animation: copied 3s linear;

    @keyframes copied {
      0% {
        opacity: 0;
        transform: translateY(1rem);
      }
      25% {
        opacity: 1;
        transform: translateY(0);
      }
      50% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(1rem);
      }
    }
  }
`

const NextPost = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  transform-origin: bottom right;
  position: absolute;
  bottom: 1.5rem;
  right: 2.75rem;
  white-space: nowrap;

  small {
    color: var(--gray60);
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
    line-height: 100%;
    transform: translateY(-2px);
  }

  h4 {
    line-height: 100%;
    letter-spacing: 1.25px;
  }
`
