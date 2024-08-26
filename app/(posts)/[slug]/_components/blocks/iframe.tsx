import { Container } from "../container";
import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface IframeProps {
  id: string;
  typeHandle: string;
  embed: string;
}

export default function Iframe({ id, typeHandle, embed }: IframeProps) {
  return (
    <Section className={typeHandle}>
      <Container size="lg">
        <IframeWrapper id={id} dangerouslySetInnerHTML={{ __html: embed }} />
      </Container>
    </Section>
  );
}

const IframeWrapper = styled("div", {
  base: {
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    height: "0",
    overflow: "hidden",

    "& iframe": {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    },
  },
});
