import Image from "next/image";

import { ALL_POSTS_QUERY, POST_QUERY } from "./query";

import { fetchCraftCMS } from "@/lib/craftcms";

import { AspectRatio, styled } from "@/styled-system/jsx";

export async function generateStaticParams() {
  const posts = await fetchCraftCMS({ query: ALL_POSTS_QUERY });

  return posts.entries.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchCraftCMS({
    query: POST_QUERY,
    variables: { slug: params.slug },
  });

  const post = data.entry;

  return (
    <Header>
      <AspectRatio ratio={"4 / 3"}>
        <Image
          src={post.featuredImage[0].url}
          alt={post.featuredImage[0].title}
          width={post.featuredImage[0].width}
          height={post.featuredImage[0].height}
          blurDataURL={post.featuredImage[0].blurhashUri}
        />
      </AspectRatio>
    </Header>
  );
}

const Header = styled("div", {
  base: {
    display: "block",
  },
});
