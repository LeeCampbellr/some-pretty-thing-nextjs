import Image from "next/image";

import { Container } from "../container";
import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface ImageBlockProps {
  id: string;
  typeHandle: string;
  image: {
    title: string;
    url: string;
    kind: string;
    width: number;
    height: number;
  };
  imageSize: string;
  sectionId: string;
}

export default function ImageBlock({
  id,
  typeHandle,
  image,
  imageSize,
  sectionId,
}: ImageBlockProps) {
  return (
    <Section className={typeHandle} id={sectionId}>
      <Container size="lg">
        <ImageWrapper className={imageSize}>
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.title}
          />
        </ImageWrapper>
      </Container>
    </Section>
  );
}

const ImageWrapper = styled("div", {
  base: {
    "& .full": {
      width: "100%",
    },

    "& .large": {
      width: "75%",
      margin: "0 auto",
    },

    "& .medium": {
      width: "50%",
      margin: "0 auto",
    },

    "& .small": {
      width: "25%",
      margin: "0 auto",
    },
  },
});
