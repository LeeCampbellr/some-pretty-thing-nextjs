import React, { useState } from "react"
import styled from "styled-components"
import { CopyToClipboard } from "react-copy-to-clipboard"

import Image from "next/image"
import Link from "next/link"
import Signature from "assets/signature.svg"

import { Container } from "@components/layout"
import { Heading, Paragraph } from "@components/type"
import SocialLinks from "@components/socialLinks"
import { media } from "@utils/media"

import About from "assets/navAbout/about.png"
import Faq from "assets/navAbout/faq.png"
import Press from "assets/navAbout/press.png"

const NavigationAbout = ({ show }) => {
  const [copied, setCopied] = useState(false)

  return (
    <NavigationAboutContainer grid className={show === true ? "-active" : ""}>
      <Content>
        <div>
          <Paragraph level="lg">
            Hi, I’m Emily,
            <br />
            &nbsp;
            <br />
            Looking to chat or learn about how you can collaborate with me? I’d
            love to hear from you! Send me an email at{" "}
            <CopyToClipboard
              text={`someprettything@gmail.com`}
              onCopy={() => setCopied(true)}
            >
              <Copy>
                <EmailLink>someprettything@gmail.com</EmailLink>
                <Message className={copied ? "-active" : ""}>Copied!</Message>
              </Copy>
            </CopyToClipboard>{" "}
            and I’ll get back to you.
          </Paragraph>
          <EmilySignature>
            <Signature />
          </EmilySignature>
        </div>
        <Connect>
          <Heading as="h6" level="sh">
            Connect With Me
          </Heading>
          <SocialLinks />
        </Connect>
      </Content>
      <Links>
        <Link href="/about">
          <AboutLink>
            <Image src={About} layout="fill" objectFit="cover" />

            <Heading as="h4" level="h4">
              About
            </Heading>
          </AboutLink>
        </Link>
        <Link href="/about/faq">
          <AboutLink>
            <Image src={Faq} layout="fill" objectFit="cover" />
            <Heading as="h4" level="h4">
              Interview w/ Emily
            </Heading>
          </AboutLink>
        </Link>
        <Link href="/about/press">
          <AboutLink>
            <Image src={Press} layout="fill" objectFit="cover" />
            <Heading as="h4" level="h4">
              Press
            </Heading>
          </AboutLink>
        </Link>
      </Links>
    </NavigationAboutContainer>
  )
}

export default NavigationAbout

const NavigationAboutContainer = styled(Container)`
  background-color: var(--red20);
  display: none;
  gap: 5rem;
  grid-template-columns: 0.75fr 1.25fr;
  left: 0;
  padding: var(--spacingSection);
  padding-bottom: var(--spacingMedium);
  padding-top: var(--spacingMedium);
  position: absolute;
  top: 0;
  transform: translateY(-30rem);
  transition: var(--transitionLong);
  width: 100vw;
  z-index: 5;

  ${media.md`
    display: grid;
  `}

  &.-active {
    transform: translateY(5rem);
  }
`

const EmilySignature = styled.div`
  display: block;
  height: auto;
  margin: 0;
  margin-top: var(--spacingXSmall);
  width: 140px;
`

const Connect = styled.div`
  h6 {
    margin-bottom: 1rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Links = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`

const AboutLink = styled.a`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: center;
  height: 400px;
  overflow: hidden;
  position: relative;

  h4 {
    position: absolute;
    text-align: center;
    width: 100%;
    color: white;
    margin: 0;
  }

  .gatsby-image-wrapper {
    height: 100%;
    transition: var(--transitionLong);

    img {
      transition: var(--transitionLong) !important;
    }

    &:after {
      background-color: rgba(0, 0, 0, 0.1);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  &:hover {
    .gatsby-image-wrapper {
      transform: scale(0.85);

      img {
        transform: scale(1.15);
      }
    }
  }
`

const Copy = styled.span`
  display: inline-block;
  position: relative;
`

const EmailLink = styled.span`
  display: inline-block;
  color: var(--red100);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Message = styled.span`
  align-items: center;
  background-color: var(--gray100);
  bottom: 0;
  color: white;
  display: inline-flex;
  font-family: var(--paragraphFamily);
  font-size: 0.95rem;
  font-weight: var(--paragraphWeight);
  justify-content: center;
  line-height: var(--paragraphLeading);
  left: 0;
  letter-spacing: 0.5px;
  margin: auto;
  opacity: 0;
  padding: 0.15rem 0.25rem;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: center;
  text-transform: uppercase;
  transform: rotate(0deg);
  transform-origin: top center;
  top: 0;
  transition: var(--transitionBase);
  width: 100px;

  &.-active {
    animation: copy 2.5s linear;

    @keyframes copy {
      0% {
        opacity: 0;
        transform: rotate(0deg);
      }
      20% {
        opacity: 1;
        transform: rotate(-16deg);
      }
      80% {
        opacity: 1;
        transform: rotate(-16deg);
      }
      100% {
        opacity: 0;
        transform: rotate(0deg);
      }
    }
  }
`
