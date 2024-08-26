import { DateTime } from "luxon";
import Image from "next/image";
import React from "react";

import BrandBlock, { BrandBlockProps } from "./_components/blocks/brandBlock";
import ContentCenter, {
  ContentCenterProps,
} from "./_components/blocks/contentCenter";
import ContentIntroIndex, {
  ContentIntroIndexProps,
} from "./_components/blocks/contentIntroIndex";
import ContentIntroShop, {
  ContentIntroShopProps,
} from "./_components/blocks/contentIntroShop";
import ContentIntroSponsored, {
  ContentIntroSponsoredProps,
} from "./_components/blocks/contentIntroSponsored";
import ContentSplit, {
  ContentSplitProps,
} from "./_components/blocks/contentSplit";
import ContentSplitImage, {
  ContentSplitImageProps,
} from "./_components/blocks/contentSplitImage";
import Iframe, { IframeProps } from "./_components/blocks/iframe";
import ImageBlock, { ImageBlockProps } from "./_components/blocks/image";
import ImageGallery, {
  ImageGalleryProps,
} from "./_components/blocks/imageGallery";
import ImageSplit, { ImageSplitProps } from "./_components/blocks/imageSplit";
import Quote, { QuoteProps } from "./_components/blocks/quote";
import Widget, { WidgetProps } from "./_components/blocks/widget";
import { ALL_POSTS_QUERY, POST_QUERY, PostProps } from "./query";

import { fetchCraftCMS } from "@/lib/craftcms";

import { AspectRatio, styled } from "@/styled-system/jsx";

import Container from "@/components/container";
import Flex from "@/components/flex";

import Scribble from "@/images/scribble.png";

type ContentBlock =
  | ({ typeHandle: "brandBlock" } & BrandBlockProps)
  | ({ typeHandle: "contentCenter" } & ContentCenterProps)
  | ({ typeHandle: "contentIntroIndex" } & ContentIntroIndexProps)
  | ({ typeHandle: "contentIntroShop" } & ContentIntroShopProps)
  | ({ typeHandle: "contentIntroSponsored" } & ContentIntroSponsoredProps)
  | ({ typeHandle: "contentSplit" } & ContentSplitProps)
  | ({ typeHandle: "contentSplitImage" } & ContentSplitImageProps)
  | ({ typeHandle: "iframe" } & IframeProps)
  | ({ typeHandle: "image" } & ImageBlockProps)
  | ({ typeHandle: "imageGallery" } & ImageGalleryProps)
  | ({ typeHandle: "imageSplit" } & ImageSplitProps)
  | ({ typeHandle: "quote" } & QuoteProps)
  | ({ typeHandle: "widget" } & WidgetProps);

const components: {
  [K in ContentBlock["typeHandle"]]: React.ComponentType<
    Extract<ContentBlock, { typeHandle: K }>
  >;
} = {
  brandBlock: BrandBlock,
  contentCenter: ContentCenter,
  contentIntroIndex: ContentIntroIndex,
  contentIntroShop: ContentIntroShop,
  contentIntroSponsored: ContentIntroSponsored,
  contentSplit: ContentSplit,
  contentSplitImage: ContentSplitImage,
  iframe: Iframe,
  image: ImageBlock,
  imageGallery: ImageGallery,
  imageSplit: ImageSplit,
  quote: Quote,
  widget: Widget,
};

export async function generateStaticParams() {
  const posts = await fetchCraftCMS({ query: ALL_POSTS_QUERY });

  return posts.entries.map((post: PostProps["post"]) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchCraftCMS({
    query: POST_QUERY,
    variables: { slug: params.slug },
  });

  const post = data.entry;

  const dt = DateTime.fromISO(post.postDate, { zone: "utc" });

  return (
    <React.Fragment>
      <Header>
        <Container size="md" align="center" variant="header">
          <Flex direction="column" align="center">
            <h6>{dt.toLocaleString(DateTime.DATE_MED)}</h6>
            <h1>{post.title}</h1>
            <Image src={Scribble} alt="Scribble" />
          </Flex>
        </Container>

        <Container align="center">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={post.featuredImage[0].url}
              alt={post.featuredImage[0].title}
              width={post.featuredImage[0].width}
              height={post.featuredImage[0].height}
              blurDataURL={post.featuredImage[0].blurhashUri}
            />
          </AspectRatio>
        </Container>
      </Header>

      <Container>
        {post.postContent.map((block: ContentBlock, index: number) => {
          const BlockComponent = components[
            block.typeHandle
          ] as React.ComponentType<typeof block>;
          return BlockComponent ? (
            <BlockComponent key={index} {...block} />
          ) : null;
        })}
      </Container>
    </React.Fragment>
  );
}

const Header = styled("div", {
  base: {
    display: "block",
    width: "100%",
    marginBottom: "$lg",
  },
});
