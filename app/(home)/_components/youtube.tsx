import Image from "next/image";

import { YoutubeVideoProps } from "@/lib/youtube";

import { styled } from "@/styled-system/jsx";

import Heading from "@/components/heading";
import Link from "@/components/link";

export default function Youtube({ video }: YoutubeVideoProps) {
  return (
    <Card href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
      <Image
        src={video.snippet.thumbnails.maxres.url}
        width={video.snippet.thumbnails.maxres.width}
        height={video.snippet.thumbnails.maxres.height}
        alt={video.snippet.title}
      />

      <div>
        <Heading as="h5">{video.snippet.title}</Heading>
        <Link align="center">Watch the Video</Link>
      </div>
    </Card>
  );
}

const Card = styled("a", {
  base: {
    display: "flex",
    flexDir: "column",
    gap: "$sm",
  },
});
