import Link from "next/link";

import { Section } from "../section";

import { styled } from "@/styled-system/jsx";

export interface ContentIntroIndexProps {
  id: string;
  typeHandle: string;
  paragraph: string;
  sectionId: string;
  shopIndex: Array<{
    itemTitle: string;
    link: string;
  }>;
}

export default function ContentIntroIndex({
  id,
  typeHandle,
  paragraph,
  sectionId,
  shopIndex,
}: ContentIntroIndexProps) {
  return (
    <Section className={typeHandle}>
      <Grid>
        <div dangerouslySetInnerHTML={{ __html: paragraph }} />

        <ul>
          <h6>This Post:</h6>

          {shopIndex.map((item, index) => (
            <li key={index}>
              <Link href={`#${sectionId}`}>{item.itemTitle}</Link>
            </li>
          ))}
        </ul>
      </Grid>
    </Section>
  );
}

const Grid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "$lg",

    lg: {
      gridTemplateColumns: "1fr 240px",
    },
  },
});
