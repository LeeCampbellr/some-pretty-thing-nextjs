import Image from "next/image";

import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface ImageSplitProps {
  id: string;
  typeHandle: string;
  alignment: "center" | "left" | "right" | undefined;
  imageLeft: {
    url: string;
    title: string;
    kind: string;
    width: number;
    height: number;
  }[];
  imageLeftSize: "fullWidth" | "large" | "medium" | "small" | undefined;
  imageRight: {
    url: string;
    title: string;
    kind: string;
    width: number;
    height: number;
  }[];
  imageRightSize: "fullWidth" | "large" | "medium" | "small" | undefined;
  sectionId: string;
}

export default function ImageSplit({
  id,
  typeHandle,
  alignment,
  imageLeft,
  imageLeftSize,
  imageRight,
  imageRightSize,
  sectionId,
}: ImageSplitProps) {
  return (
    <Section className={typeHandle}>
      <Grid id={sectionId} alignment={alignment}>
        <ImageWrapper size={imageLeftSize}>
          <Image
            src={imageLeft[0].url}
            width={imageLeft[0].width}
            height={imageLeft[0].height}
            alt={imageLeft[0].title}
          />
        </ImageWrapper>

        <ImageWrapper size={imageRightSize}>
          <Image
            src={imageRight[0].url}
            width={imageRight[0].width}
            height={imageRight[0].height}
            alt={imageRight[0].title}
          />
        </ImageWrapper>
      </Grid>
    </Section>
  );
}

const Grid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "1fr",

    lg: {
      gridTemplateColumns: "1fr 1fr",
      gridGap: "2rem",
    },
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
  base: {},

  variants: {
    size: {
      fullWidth: {
        width: "100%",
      },
      large: {
        width: "75%",
      },
      medium: {
        width: "50%",
      },
      small: {
        width: "25%",
      },
    },
  },
});
