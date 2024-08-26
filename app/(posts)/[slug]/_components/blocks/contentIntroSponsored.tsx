import Image from "next/image";

import { Container } from "../container";
import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface ContentIntroSponsoredProps {
  id: string;
  typeHandle: string;
  paragraph: string;
  sectionId: string;
  sponsoredContent: string;
  sponsoredLogo: {
    title: string;
    url: string;
    width: number;
    height: number;
  };
}

export default function ContentIntroSponsored({
  id,
  typeHandle,
  paragraph,
  sectionId,
  sponsoredContent,
  sponsoredLogo,
}: ContentIntroSponsoredProps) {
  return (
    <Section id={sectionId} className={typeHandle}>
      <Container size="lg">
        <Grid>
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />

          <div>
            <h6>Sponsored By:</h6>

            <Image
              src={sponsoredLogo.url}
              width={sponsoredLogo.width}
              height={sponsoredLogo.height}
              alt={sponsoredLogo.title}
            />

            <div dangerouslySetInnerHTML={{ __html: sponsoredContent }} />
          </div>
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
      gridTemplateColumns: "1fr 240px",
    },
  },
});
