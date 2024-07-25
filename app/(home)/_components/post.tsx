import Image from "next/image";
import NextLink from "next/link";

import { AspectRatio, styled } from "@/styled-system/jsx";

import Link from "@/components/link";

export type PostProps = {
  post: {
    id?: string;
    title?: string;
    slug?: URL;
    postDate?: string;
    excerpt?: string;
    categories?: {
      title: string;
      slug: string;
    }[];
    featuredImage?: {
      blurhashUri: string;
      url: string;
      title: string;
      width: number;
      height: number;
    }[];
  };
};

export function Post({ post }: PostProps) {
  const featuredImage =
    post.featuredImage && post.featuredImage.length > 0
      ? post.featuredImage[0]
      : null;

  return (
    <Card href={`/${post.slug}`}>
      {featuredImage && (
        <AspectRatio ratio={4 / 3}>
          <Image
            src={featuredImage.url}
            alt={featuredImage.title}
            width={featuredImage.width}
            height={featuredImage.height}
            blurDataURL={featuredImage.blurhashUri}
          />
        </AspectRatio>
      )}

      <div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link>Read More</Link>
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
