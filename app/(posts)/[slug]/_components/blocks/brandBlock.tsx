import Image from "next/image";
import React from "react";

import { Container } from "../container";
import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface BrandBlockProps {
  id: string;
  typeHandle: string;
  brand: {
    id: string;
    image: {
      url: string;
      width: number;
      height: number;
    };
    linkUrl: string;
  };
}

export default function BrandBlock({ id, typeHandle, brand }: BrandBlockProps) {
  return (
    <Section className={typeHandle}>
      <Container size="lg" id={id}>
        <Grid>
          <a href={brand.linkUrl}>
            <Image
              src={brand.image.url}
              width={brand.image.width}
              height={brand.image.height}
              alt="Brand"
            />
          </a>
        </Grid>
      </Container>
    </Section>
  );
}

const Grid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "$sm",

    lg: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
});
