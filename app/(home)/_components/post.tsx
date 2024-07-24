import Image from "next/image";
import NextLink from "next/link";

import { AspectRatio, styled } from "@/styled-system/jsx";

import Link from "@/components/link";

export interface PostProps {
  id: string;
  title: string;
  slug: string;
  postDate: string;
  excerpt: string;
  categories: {
    title: string;
    slug: string;
  }[];
  featuredImage: {
    blurhashUri: string;
    url: string;
    title: string;
    width: number;
    height: number;
  }[];
}

export default function Post({ post }: PostProps) {
  return (
    <Card href={post.slug}>
      <AspectRatio ratio={4 / 3}>
        <Image
          src={post.featuredImage[0].url}
          alt={post.featuredImage[0].title}
          width={post.featuredImage[0].width}
          height={post.featuredImage[0].height}
          blurDataURL={post.featuredImage[0].blurhashUri}
        />
      </AspectRatio>

      <div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link href={post.slug}>Read More</Link>
      </div>
    </Card>
  );
}

const Card = styled(NextLink, {
  base: {
    display: "flex",
    flexDir: "column",
    textAlign: "left",
    gap: "$sm",
  },
});
