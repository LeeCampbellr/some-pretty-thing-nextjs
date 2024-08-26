import Image from "next/image";

import { Container } from "../container";
import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface ImageGalleryProps {
  id: string;
  typeHandle: string;
  alignment: "center" | "left" | "right" | undefined;
  gallery: Array<{
    title: string;
    url: string;
    kind: string;
    width: number;
    height: number;
  }>;
  sectionId: string;
}

export default function ImageGallery({
  id,
  typeHandle,
  alignment,
  gallery,
  sectionId,
}: ImageGalleryProps) {
  return (
    <Section className={typeHandle} id={sectionId}>
      <Container size="lg">
        <GalleryWrapper alignment={alignment}>
          {gallery.map((image, index) => (
            <ImageWrapper key={index}>
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.title}
              />
            </ImageWrapper>
          ))}
        </GalleryWrapper>
      </Container>
    </Section>
  );
}

const GalleryWrapper = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridGap: "1rem",
  },

  variants: {
    alignment: {
      left: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      right: {
        justifyContent: "flex-end",
      },
    },
  },
});

const ImageWrapper = styled("div", {
  base: {
    width: "100%",
    height: "auto",
  },
});
