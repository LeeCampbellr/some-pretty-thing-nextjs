import Head from "next/head";
import React from "react";

import { Container } from "../container";
import { Section } from "../section";

export interface WidgetProps {
  id: string;
  typeHandle: string;
  embed: string;
}

export default function Widget({ id, typeHandle, embed }: WidgetProps) {
  return (
    <Section className={typeHandle}>
      <Head>
        <script
          async
          src="//widgets.shopstyle.com/shopstyle-widget-snippet.js"
        ></script>
        <script
          async
          defer
          className="curalate-widget-script"
          src="//d30bopbxapq94k.cloudfront.net/js/curalate-widget-client-all-v3.min.js"
        ></script>
      </Head>

      <Container
        size="md"
        id={id}
        dangerouslySetInnerHTML={{ __html: embed }}
      />
    </Section>
  );
}
