import React, { useState, useRef } from "react"
import styled from "styled-components"

import Signature from "/public/images/signature.svg"
import Input from "@components/input"
import { Button } from "@components/links"
import { Section } from "@components/layout"
import { Paragraph } from "@components/type"
import { media } from "@utils/media"

const Newsletter = () => {
  const ContentRef = useRef()
  const FormRef = useRef()
  const SuccessRef = useRef()
  const inputEl = useRef()

  const [message, setMessage] = useState("")

  const handleStart = (e) => {
    e.preventDefault()
    ContentRef.current.classList.add("-complete")
    FormRef.current.classList.add("-active")
  }

  const subscribe = async (e) => {
    e.preventDefault()

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    const { error } = await res.json()

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error)
      return
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = ""
    FormRef.current.classList.add("-complete")
    SuccessRef.current.classList.add("-active")
  }

  return (
    <NewsletterWrapper name="newsletter" container>
      <NewsletterContainer>
        <Content ref={ContentRef} className="-active">
          <Paragraph level="lg" noMargin>
            Sign up for exclusive content delivered right to your inbox.
          </Paragraph>
          <Button onClick={handleStart}>Sign Up</Button>
        </Content>
        <Form ref={FormRef}>
          <form onSubmit={subscribe} id="newsletter">
            <label htmlFor="email">Email Address</label>
            <Input
              type="email"
              ref={inputEl}
              placeholder="Email Address"
              id="email-input"
              name="email"
              aria-label="Email Address"
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Success ref={SuccessRef}>
          <Paragraph level="lg" noMargin>
            {message
              ? message
              : "Thanks for signing up, check your inbox for the first edition!"}
          </Paragraph>
          <Signature />
        </Success>
      </NewsletterContainer>
    </NewsletterWrapper>
  )
}

export default Newsletter

const NewsletterWrapper = styled(Section)`
  border-top: var(--borderBase);
  position: relative;
  margin: var(--spacingContainer);

  ${media.md`
    margin-top: var(--spacingMedium);
  `}
`

const NewsletterContainer = styled.div`
  overflow: hidden;
  padding: 2rem 0;
  position: relative;
  width: 100%;
  z-index: var(--zFront);

  ${media.md`
    background-color: var(--red20);
    height: 96px;
    padding: 1.5rem;
    transform: translateY(-64px);
  `}
`

const Block = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 2rem;
  transition: var(--transitionLong);
  top: 0;
  width: 100%;

  ${media.md`
    height: 96px;
    flex-direction: row;
    position: absolute;
    transform: translateY(100%);
  `}

  &.-active {
    ${media.md`
      transform: translateY(0);
    `}
  }

  &.-complete {
    ${media.md`
      transform: translateY(-100%);
    `}
  }
`

const Content = styled(Block)`
  text-align: center;

  ${media.md`
    justify-content: space-between;
    text-align: left;
  `}

  button {
    display: none;

    ${media.md`
      display: block;
    `}
  }
`

const Form = styled(Block)`
  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

    ${media.md`
      flex-direction: row;
    `}

    label {
      display: none;
      visibility: hidden;
    }
  }
`

const Success = styled(Block)`
  display: none;
  text-align: center;

  ${media.md`
    display: flex;
  `}

  &.-active {
    display: flex;
  }

  p {
    padding-right: 1.5rem;
  }

  svg {
    transform: translateY(-0.25rem) rotate(5deg);
    width: 120px;
  }
`
