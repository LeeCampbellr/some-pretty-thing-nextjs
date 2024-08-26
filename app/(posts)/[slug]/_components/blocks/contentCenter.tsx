import React from "react";

import { Container } from "../container";
import { Section } from "../section";

export interface ContentCenterProps {
  id: string;
  typeHandle: string;
  paragraph: string;
  sectionId: string;
}

export default function ContentCenter({
  id,
  typeHandle,
  paragraph,
  sectionId,
}: ContentCenterProps) {
  return (
    <Section className={typeHandle} id={sectionId}>
      <Container
        size="md"
        dangerouslySetInnerHTML={{ __html: paragraph }}
      ></Container>
    </Section>
  );
}
