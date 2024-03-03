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
          <ListItem>Seasonal Living</ListItem>
          <ListItem>In My Wardrobe</ListItem>
          <ListItem>In The Garden</ListItem>
        </List>

        <div>
          <Logo size="lg" />
        </div>

        <List variant="right">
          <ListItem>Shop</ListItem>
          <ListItem>
            <SocialList>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <PinterestIcon />
              </li>
              <li>
                <YoutubeIcon />
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
  },
});

const NavContent = styled("div", {
  base: {
    height: "10rem",
    maxWidth: "92.5rem",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    padding: "0 clamp(1rem, 7.39vw + -0.912rem, 5rem)",
  },
});

const List = styled("ul", {
  base: {
    alignItems: "center",
    display: "flex",
    listStyle: "none",
    margin: "0",
  },

  variants: {
    variant: {
      left: {
        justifyContent: "flex-start",

        "& > li": {
          padding: "0.25rem 0.75rem",
          margin: "0",

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

          "&:last-of-type": {
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
    letterSpacing: "0.1em",
    lineHeight: "1",
    textTransform: "uppercase",
    margin: "0",
  },
});

const SocialList = styled("ul", {
  base: {
    listStyle: "none",
    display: "flex",
    gap: "$sm",
    margin: "0",

    "& li": {
      margin: "0",
    },
  },
});
