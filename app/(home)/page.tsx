import Image from "next/image";

import { Post, PostProps } from "./_components/post";
import PostcardsFrom from "./_components/postcardsFrom";
import HOME_QUERY from "./query";

import { fetchCraftCMS } from "@/lib/craftcms";

import { css } from "@/styled-system/css";
import { AspectRatio, styled } from "@/styled-system/jsx";

import Container from "@/components/container";
import Grid from "@/components/grid";
import Heading from "@/components/heading";
import Link from "@/components/link";

import HeaderShadow from "@/images/header-shadow.png";

export default async function Home() {
  const data = await fetchCraftCMS({ query: HOME_QUERY });
  // const videos = await fetchYoutubeVideos(3);

  return (
    <>
      <Header data-theme="dark">
        <Image
          src={HeaderShadow}
          alt="shadow"
          fill
          style={{
            objectFit: "cover",
          }}
        />

        <HeaderImages>
          <HeaderImage variant="left"></HeaderImage>

          <HeaderImage variant="right"></HeaderImage>
        </HeaderImages>

        <HeaderContent>
          <Container>
            <Heading as="h1" align="center" margin="none">
              <i>Intentional Living. Seasonal Inspiration</i>
            </Heading>
          </Container>
        </HeaderContent>
      </Header>

      <Container variant="section">
        <Grid columns={2} gap="xl" align="center">
          <AspectRatio ratio={3 / 4}>
            <Image
              src={data.featuredPost.featuredImage[0].url}
              alt={data.featuredPost.featuredImage[0].title}
              width={data.featuredPost.featuredImage[0].width}
              height={data.featuredPost.featuredImage[0].height}
              blurDataURL={data.featuredPost.featuredImage[0].blurhashUri}
            />
          </AspectRatio>

          <a href={data.featuredPost.slug}>
            <h6>My Most Recent Post</h6>
            <h2
              className={css({
                lg: { marginBottom: "7.5rem" },
              })}
            >
              {data.featuredPost.title}
            </h2>
            <p>{data.featuredPost.excerpt}</p>
            <Link>Read More</Link>
          </a>
        </Grid>
      </Container>

      <Container variant="section" align="center">
        <h6>My Popular Posts</h6>

        <Grid columns={3} gap="md">
          {data.home.popularPosts.map(
            (post: PostProps["post"], index: number) => {
              return <Post key={index} post={post} />;
            }
          )}
        </Grid>
      </Container>

      <PostcardsFrom />

      {/* <Container variant="section" align="center">
        <h6>Recent Youtube Videos</h6>

        <Grid columns={3} gap="md">
          {videos.map((video: YoutubeVideoProps, index: number) => {
            return <Youtube video={video.video} key={index} />;
          })}
        </Grid>
      </Container> */}
    </>
  );
}

const Header = styled("header", {
  base: {
    bg: "tan.7",
    width: "100%",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    zIndex: "$header",
    position: "relative",
  },
});

const HeaderImages = styled("div", {
  base: {
    position: "absolute",
    zIndex: "1",
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "1fr 1fr",
    gap: "clamp(1.5rem, -1.3333rem + 14.1667vi, 7.5rem)",
    width: "100%",
    maxWidth: "92.5rem",
    margin: "auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: "0 clamp(1rem, 7.39vw + -0.912rem, 5rem)",
  },
});

const HeaderImage = styled("div", {
  base: {
    width: "100%",
    bg: "tan.8",
  },

  variants: {
    variant: {
      left: {
        paddingTop: "65%",
        // marginTop: "-12",
      },
      right: {
        paddingTop: "144%",
        transform: "translateY(15%)",
        // marginTop: "17",
      },
    },
  },
});

const HeaderContent = styled("div", {
  base: {
    width: "100%",
    zIndex: "1",
  },
});
