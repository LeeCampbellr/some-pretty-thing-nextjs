import styled from "styled-components"
import { media } from "@utils/media"

const Input = styled.input`
  appearance: none;
  background-color: white;
  border: none;
  font-family: var(--paragraphFamily);
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  margin: 0;
  width: 100%;

  @media screen and (max-width: 1200px) {
    border-bottom: 1px solid var(--gray--100);
    margin-bottom: 1rem;
    text-align: center;
  }

  ${media.md`
    margin-right: 2rem;
  `}

  &:focus {
    outline: none;
  }
`

export default Input
