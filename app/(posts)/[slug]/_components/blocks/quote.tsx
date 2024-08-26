import { Container } from "../container";
import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface QuoteProps {
  id: string;
  typeHandle: string;
  sectionId: string;
  quote: string;
}

export default function Quote({
  id,
  typeHandle,
  sectionId,
  quote,
}: QuoteProps) {
  return (
    <Section className={typeHandle}>
      <Container size="md">
        <QuoteWrapper>{quote}</QuoteWrapper>
      </Container>
    </Section>
  );
}

const QuoteWrapper = styled("blockquote", {
  base: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    textAlign: "center",
    margin: "2rem 0",
    padding: "1rem",
    borderLeft: "5px solid var(--primaryColor)",
  },
});
