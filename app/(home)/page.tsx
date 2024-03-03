import Image from "next/image";

import HOME_QUERY from "./query";

import { fetchCraftCMS } from "@/data/craftcms";

import { css } from "@/styled-system/css";
import { AspectRatio, styled } from "@/styled-system/jsx";

import Container from "@/components/container";
import Grid from "@/components/grid";
import Link from "@/components/link";

export default async function Home() {
  const data = await fetchCraftCMS({ query: HOME_QUERY });

  return (
    <>
      <Header data-theme="dark">
        <Container>
          <h1>
            <i>Intentional Living. Seasonal Inspiration</i>
          </h1>
        </Container>
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

          <div>
            <h6>My Most Recent Post</h6>
            <h2
              className={css({
                lg: { marginBottom: "7.5rem" },
              })}
            >
              {data.featuredPost.title}
            </h2>
            <p>{data.featuredPost.excerpt}</p>
            <Link href={data.featuredPost.slug}>Read More</Link>
          </div>
        </Grid>
      </Container>

      <Container variant="section">
        <Grid columns={3} gap="lg">
          <div>h1</div>
        </Grid>
      </Container>
    </>
  );
}

const Header = styled("header", {
  base: {
    bg: "tan.8",
    width: "100%",
    height: "90vh",
    display: "flex",
    alignItems: "center",
  },
});
