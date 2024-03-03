"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import { styled } from "@/styled-system/jsx";

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
          <Dialog.Close>
            <CrossIcon />
          </Dialog.Close>

          <ul>
            <li>Seasonal Living</li>
            <li>In My Wardrobe</li>
            <li>In The Garden</li>
            <li>At Home With</li>
            <li>Wallpapers</li>
          </ul>

          <Grid>
            <div></div>

            <div>
              <h6>Contact</h6>

              <Email>
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
    bg: "rgba( 0, 0, 0, 0.75 )",

    position: "fixed",
    inset: 0,
    zIndex: 1,
    backdropFilter: "blur(8px)",
  },
});

const DialogContent = styled(Dialog.Content, {
  base: {
    background: "$background",
    minHeight: "0",
    width: "100%",
    maxWidth: "35rem",
    height: "100vh",
    position: "fixed",
    top: "0",
    right: "0",
    zIndex: "1",
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

const Grid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "7.5rem 1fr",
    height: "7.5rem",
    borderTop: "1px solid",
    borderColor: "$border",
    marginTop: "auto",

    "& > div:first-of-type": {
      borderRight: "1px solid ",
      borderRightColor: "$border",
    },
  },
});

const Email = styled("h5", {
  fontSize: "1.125rem",
  margin: "0",
});
