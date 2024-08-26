import Image from "next/image";

import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface ContentSplitImageProps {
  id: string;
  typeHandle: string;
  alignment: "center" | "left" | "right" | undefined;
  imageSize: string;
  image: {
    title: string;
    url: string;
    kind: string;
    width: number;
    height: number;
  }[];
  layout: "imageLeft" | "imageRight" | undefined;
  paragraph: string;
  sectionId: string;
}

export default function ContentSplitImage({
  id,
  typeHandle,
  alignment,
  imageSize,
  image,
  layout,
  paragraph,
  sectionId,
}: ContentSplitImageProps) {
  return (
    <Section className={typeHandle}>
      <Grid id={sectionId} layout={layout} alignment={alignment}>
        {image.map((image, index) => {
          return (
            <ImageWrapper className={imageSize} key={index}>
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.title}
              />
            </ImageWrapper>
          );
        })}

        <Content dangerouslySetInnerHTML={{ __html: paragraph }} />
      </Grid>
    </Section>
  );
}

const Grid = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "$sm",

    lg: {
      gap: "$lg",
    },
  },

  variants: {
    layout: {
      imageLeft: {
        flexDirection: "column",

        lg: {
          flexDirection: "row-reverse",
        },
      },
      imageRight: {
        flexDirection: "column",

        lg: {
          flexDirection: "row",
        },
      },
    },
    alignment: {
      left: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      center: {
        alignItems: "center",
        justifyContent: "center",
      },
      right: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
      },
    },
  },
});

const ImageWrapper = styled("div", {
  base: {
    flex: "1 1 50%",
  },
});

const Content = styled("div", {
  base: {
    flex: "1 1 50%",
  },
});
