import { styled } from "@/styled-system/jsx";

interface Props {
  children?: React.ReactNode;
}

export default function Grid({ children, ...props }: Props) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled("div", {
  base: {
    display: "grid",
    width: "100%",
  },

  variants: {
    align: {
      start: { alignItems: "start" },
      center: { alignItems: "center" },
      end: { alignItems: "end" },
    },
    columns: {
      1: { gridTemplateColumns: "1fr" },
      2: {
        gridTemplateColumns: "repeat(1fr)",
        md: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      },
      3: { gridTemplateColumns: "repeat(3, 1fr)" },
      4: { gridTemplateColumns: "repeat(4, 1fr)" },
    },
    gap: {
      xs: { gap: "clamp(0.75rem, 0.6667rem + 0.4167vi, 1rem)" },
      sm: { gap: "clamp(0.75rem, 0.8333rem + 0.8333vi, 1.5rem)" },
      md: { gap: "clamp(1rem, 0.5rem + 2.5vi, 2.5rem)" },
      md: { gap: "clamp(1rem, 0.0833rem + 4.5833vi, 3.75rem)" },
      lg: { gap: "clamp(1rem, -1.1667rem + 10.8333vi, 7.5rem)" },
      xl: { gap: "clamp(1rem, -2rem + 15vi, 10rem)" },
    },
    justify: {
      start: { justifyContent: "start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "end" },
    },
  },
});
