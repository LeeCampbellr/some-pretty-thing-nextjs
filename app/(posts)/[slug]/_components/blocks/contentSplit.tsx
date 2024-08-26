import { Container } from "../container";
import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface ContentSplitProps {
  id: string;
  typeHandle: string;
  paragraphRight: string;
  paragraphLeft: string;
  sectionId: string;
}

export default function ContentSplit({
  id,
  typeHandle,
  paragraphRight,
  paragraphLeft,
  sectionId,
}: ContentSplitProps) {
  return (
    <Section className={typeHandle} id={sectionId}>
      <Container size="lg">
        <Grid>
          <div dangerouslySetInnerHTML={{ __html: paragraphLeft }} />
          <div dangerouslySetInnerHTML={{ __html: paragraphRight }} />
        </Grid>
      </Container>
    </Section>
  );
}

const Grid = styled("div", {
  base: {
    gridTemplateColumns: "1fr",
    gap: "$lg",

    lg: {
      gridTemplateColumns: "1fr 1fr",
      gap: "$md",
    },
  },
});
