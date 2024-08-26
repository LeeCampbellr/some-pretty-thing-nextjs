import { Container } from "../container";
import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface ContentIntroShopProps {
  id: string;
  typeHandle: string;
  paragraph: string;
  sectionId: string;
  shopIndex: Array<{
    itemTitle: string;
    link: string;
  }>;
}

export default function ContentIntroShop({
  id,
  typeHandle,
  paragraph,
  sectionId,
  shopIndex,
}: ContentIntroShopProps) {
  return (
    <Section id={sectionId} className={typeHandle}>
      <Container size="lg">
        <Grid>
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />

          <ul>
            <h6>Shop This Post:</h6>
            {shopIndex.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.itemTitle}</a>
              </li>
            ))}
          </ul>
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
