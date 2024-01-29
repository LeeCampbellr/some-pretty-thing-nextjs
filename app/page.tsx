import { styled } from "@/styled-system/jsx";

export default function Home() {
  return <Wrapper>Hello 🐼!</Wrapper>;
}

const Wrapper = styled("div", {
  base: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
});
