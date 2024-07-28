import Link from "next/link";

import { styled } from "@/styled-system/jsx";

import Logo from "@/components/logo";
import NavigationMenu from "@/components/navigationMenu";

import { InstagramIcon, PinterestIcon, YoutubeIcon } from "@/icons";

interface Props {
  theme?: "light" | "dark";
}

export default function Navigation({ theme }: Props) {
  return (
    <Nav data-theme={theme}>
      <NavContent>
        <List variant="left">
          <ListItem>
            <Link href="/category/seasonal-living">Seasonal Living</Link>
          </ListItem>
          <ListItem>
            <Link href="/category/in-my-wardrobe">In My Wardrobe</Link>
          </ListItem>
          <ListItem>
            <Link href="/category/in-the-garden">In The Garden</Link>
          </ListItem>
        </List>

        <LogoLink href="/">
          <Logo size="lg" />
        </LogoLink>

        <List variant="right">
          <ListItem>Shop</ListItem>
          <ListItem>
            <SocialList>
              <li>
                <a href="">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/littlelew/" target="_blank">
                  <PinterestIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Emily_Campbell"
                  target="_blank"
                >
                  <YoutubeIcon />
                </a>
              </li>
            </SocialList>
          </ListItem>

          <ListItem>
            <NavigationMenu />
          </ListItem>
        </List>
      </NavContent>
    </Nav>
  );
}

const Nav = styled("nav", {
  base: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    color: "$hiContrast",
    zIndex: "$nav",
  },
});

const NavContent = styled("div", {
  base: {
    maxWidth: "92.5rem",
    margin: "0 auto",
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "80px auto 80px",
    padding: "0 clamp(1rem, 7.39vw + -0.912rem, 5rem)",
    height: "7.5rem",

    lg: {
      height: "10rem",
      gridTemplateColumns: "1fr auto 1fr",
    },
  },
});

const LogoLink = styled(Link, {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const List = styled("ul", {
  base: {
    alignItems: "center",
    listStyle: "none",
    margin: "0",
    display: "flex",
  },

  variants: {
    variant: {
      left: {
        justifyContent: "flex-start",

        "& > li": {
          padding: "0.25rem 0.75rem",
          margin: "0",
          display: "none",

          lg: {
            display: "flex",
          },

          "&:first-of-type": {
            paddingLeft: "0",
          },
        },
      },
      right: {
        justifyContent: "flex-end",

        "& > li": {
          borderRight: "1px solid",
          borderColor: "$border",
          padding: "0.25rem 2rem",
          margin: "0",
          display: "none",

          lg: {
            display: "flex",
          },

          "&:last-of-type": {
            display: "flex",
            borderRight: "none",
            paddingRight: "0",
          },
        },
      },
    },
  },
});

const ListItem = styled("li", {
  base: {
    fontSize: "0.75rem",
    fontVariationSettings: "'opsz' 10, 'wdth' 480, 'wght' 300",
    letterSpacing: "0.05em",
    lineHeight: "1",
    textTransform: "uppercase",
    margin: "0",
  },

  variants: {
    menu: {
      true: {},
    },
  },
});

const SocialList = styled("ul", {
  base: {
    listStyle: "none",
    display: "flex",
    gap: "4",
    margin: "0",

    "& li": {
      margin: "0",
    },
  },
});
