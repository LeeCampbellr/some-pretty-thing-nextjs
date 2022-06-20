import React from "react"
import styled from "styled-components"
import { CopyToClipboard } from "react-copy-to-clipboard"

import LineFour from "assets/elements/line-4.svg"
import { Container, Section } from "@components/layout"
import { Heading } from "@components/type"

class SectionContact extends React.Component {
  state = {
    copied: false,
  }

  render() {
    return (
      <Section lg id="contact">
        <LineFour className="line -center" />
        <Container alignCenter justifyCenter containerLarge>
          <Heading html="h6" level="sh" center intro>
            Reach Out
          </Heading>
          <Heading html="h2" level="h1" center>
            I love connecting with like-minded people. If you want to chat or
            talk about a partnership, send me an email.
          </Heading>
          <Container flex alignCenter justifyCenter>
            <CopyToClipboard
              text={`someprettything@gmail.com`}
              onCopy={() => this.setState({ copied: true })}
            >
              <Copy>
                <Link>someprettything@gmail.com</Link>
                <Message className={this.state.copied ? "-active" : ""}>
                  Copied!
                </Message>
              </Copy>
            </CopyToClipboard>
          </Container>
        </Container>
      </Section>
    )
  }
}

export default SectionContact

const Copy = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: var(--spacingSmall) 0;
  position: relative;
`

const Link = styled.h6`
  color: var(--gray100);
  display: inline-block;
  font-family: var(--paragraphFamily);
  font-size: 1.25rem;
  font-weight: var(--paragraphWeight);
  line-height: var(--paragraphLeading);
  margin: 0;
  position: relative;
  transition: var(--transitionBase);

  &:hover {
    text-decoration: underline;
    pointer-events: cursor;
  }
`

const Message = styled.h6`
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
