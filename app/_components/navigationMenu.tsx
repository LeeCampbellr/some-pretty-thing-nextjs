"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useState } from "react";

import { styled } from "@/styled-system/jsx";

import Heading from "@/components/heading";

import { CrossIcon } from "@/icons";

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Trigger onClick={() => setIsOpen(!isOpen)}>
          <TriggerText>Menu</TriggerText>

          <Hamburger active={isOpen}>
            <Line />
            <Line />
            <Line />
          </Hamburger>
        </Trigger>
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <Close>
            <CrossIcon />
          </Close>

          <List>
            <ListItem>
              <Link href="/">Seasonal Living</Link>
            </ListItem>
            <ListItem>
              <Link href="/">In My Wardrobe</Link>
            </ListItem>
            <ListItem>
              <Link href="/">In The Garden</Link>
            </ListItem>
            <ListItem>
              <Link href="/">At Home With</Link>
            </ListItem>
            <ListItem>
              <Link href="/">Wallpapers</Link>
            </ListItem>
          </List>

          <Grid>
            <div></div>

            <div>
              <Heading as="h6" margin="none">
                Contact
              </Heading>

              <Email href="mailto:someprettything@gmail.com">
                <i>someprettything@gmail.com</i>
              </Email>
            </div>
          </Grid>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Trigger = styled("button", {
  base: {
    position: "relative",
    marginLeft: "1rem",
    outline: "none",
  },
});

const TriggerText = styled("span", {
  base: {
    fontSize: "0.6rem",
    letterSpacing: "0.1em",
    fontVariationSettings: "'opsz' 10, 'wdth' 200, 'wght' 300",
    lineHeight: "1",
    textTransform: "uppercase",
    position: "absolute",
    transform: "rotate(-90deg)",
    transformOrigin: "bottom left",
    top: "58%",
    right: "0.2rem",
  },
});

const Line = styled("span", {
  base: {
    backgroundColor: "$hiContrast",
    height: "1.5px",
    width: "1.5rem",
    display: "block",
    margin: "0.5rem auto",
    transition: "transform 200ms ease-in-out",
  },
});

const Hamburger = styled("div", {
  base: {
    cursor: "pointer",
  },

  variants: {
    active: {
      true: {
        "& span": {
          "&:nth-of-type(1)": {
            transform: "translateY(9.75px) rotate(45deg)",
          },
          "&:nth-of-type(2)": {
            opacity: 0,
          },
          "&:nth-of-type(3)": {
            transform: "translateY(-9.75px) rotate(-45deg)",
          },
        },
      },
      false: {},
    },
  },
});

const DialogOverlay = styled(Dialog.Overlay, {
  base: {
    bg: "overlay.base",
    position: "fixed",
    inset: 0,
    zIndex: "$menu",
    backdropFilter: "blur(8px)",
    transition: "all 300ms ease-in-out",

    '&[data-state="open"]': {
      animation: "fadeIn 200ms ease-in-out",
    },

    '&[data-state="closed"]': {
      animation: "fadeOut 200ms ease-in-out",
    },
  },
});

const DialogContent = styled(Dialog.Content, {
  base: {
    zIndex: "$menu",
    background: "$background",
    minHeight: "0",
    width: "100%",
    maxWidth: "35rem",
    height: "100vh",
    position: "fixed",
    top: "0",
    right: "0",
    display: "flex",
    flexDir: "column",

    '&[data-state="open"]': {
      animation: "slideIn 400ms ease-in-out",
    },

    '&[data-state="closed"]': {
      animation: "slideOut 400ms ease-in-out",
    },
  },
});

const Close = styled(Dialog.Close, {
  base: {
    cursor: "pointer",
    position: "absolute",
    right: "1rem",
    top: "1rem",

    md: {
      right: "2.5rem",
      top: "2.5rem",
    },

    lg: {
      right: "3rem",
      top: "3rem",
    },
  },
});

const List = styled("ul", {
  base: {
    margin: "0",
    padding: "2.5rem 1rem",

    sm: { padding: "3rem 2rem" },
    md: { padding: "5rem 3rem" },
    lg: { padding: "7.5rem 5rem" },
  },
});

const ListItem = styled("li", {
  base: {
    margin: "0",
    fontSize: "$h4",
    padding: "0.25rem 0",
  },
});

const Grid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "7.5rem 1fr",
    height: "7.5rem",
    borderTop: "1px solid",
    borderColor: "$border",
    marginTop: "auto",
    alignItems: "center",

    "& > div:first-of-type": {
      borderRight: "1px solid ",
      borderRightColor: "$border",
      width: "100%",
      height: "100%",
    },

    "& > div:last-of-type": {
      padding: "8",
    },
  },
});

const Email = styled("a", {
  base: {
    fontSize: "1rem",
    margin: "0",

    lg: {
      fontSize: "1.5rem",
    },

    _hover: {
      textDecoration: "underline",
    },
  },
});
