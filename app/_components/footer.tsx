import Image from "next/image";
import Link from "next/link";

import { PinterestIcon, YoutubeIcon } from "../_icons";

import { styled } from "@/styled-system/jsx";

import Flex from "@/components/flex";
import Logo from "@/components/logo";
import Text from "@/components/text";

import Scribble from "@/images/scribble-footer.png";

export default function Footer() {
  return (
    <Wrapper>
      <Layout>
        <Column>
          <Content variant="left">
            <div>
              <InstagramImage />
              <Text margin="0">
                <i>Instagram</i>
              </Text>
            </div>

            <a href="https://www.youtube.com/@Emily_Campbell" target="_blank">
              <YoutubeIcon />
            </a>

            <a href="https://www.pinterest.com/littlelew/" target="_blank">
              <PinterestIcon />
            </a>
          </Content>
        </Column>

        <Column>
          <Content variant="right">
            <Logo size="lg" />
            <Text size="sm" margin="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </Text>
            <Image src={Scribble} alt="pencil scribble" width={200} />
          </Content>

          <Disclosure>
            <Flex gap="sm">
              <DisclosureLink href="/terms-of-service">
                Terms of Service
              </DisclosureLink>
              <DisclosureLink href="/privacy-policy">
                Privacy Policy
              </DisclosureLink>
            </Flex>

            <DisclosureText>
              © 2024 Emily Campbell. All rights reserved.
            </DisclosureText>
          </Disclosure>
        </Column>
      </Layout>
    </Wrapper>
  );
}

const Wrapper = styled("footer", {
  base: {
    borderTop: "1px solid",
    borderColor: "$border",
    marginTop: "auto",
  },
});

const Layout = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "1fr",

    md: {
      gridTemplateColumns: "1fr 2fr",
    },
  },
});

const Column = styled("div", {
  base: {
    display: "flex",
    flexDir: "column",
    alignItems: "center",

    _first: {
      borderBottom: "1px solid",
      borderBottomColor: "$border",

      md: {
        border: "none",
      },
    },

    _last: {
      borderLeft: "1px solid",
      borderColor: "$border",
    },
  },
});

const InstagramImage = styled("div", {
  base: {
    width: "200px",
    height: "auto",
    paddingBottom: "100%",
    bg: "tan.7",
    marginBottom: "$sm",
  },
});

const Content = styled("div", {
  base: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    maxWidth: "40rem",
  },

  variants: {
    variant: {
      left: {
        gap: "$sm",
        px: "4",
        py: "8",

        md: {
          padding: "10",
        },

        lg: {
          gap: "$md",
          padding: "15",
        },
      },
      right: {
        gap: "$sm",
        px: "4",
        py: "8",

        md: {
          px: "7",
          py: "15",
        },

        lg: {
          px: "10",
          py: "17",
        },
      },
    },
  },
});

const Disclosure = styled("div", {
  base: {
    padding: "$sm",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    borderTop: "1px solid",
    borderTopColor: "$border",
  },
});

const DisclosureText = styled("p", {
  base: {
    fontSize: "$h6",
    margin: "0",
  },
});

const DisclosureLink = styled(Link, {
  base: {
    fontSize: "$h6",
    margin: "0",
  },
});
