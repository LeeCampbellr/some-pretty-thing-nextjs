import { styled } from "@/styled-system/jsx";

import Container from "@/components/container";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Layout>
          <Column></Column>

          <Column>
            <Logo size="md" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            <div>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>

              <p>© 2024 Emily Campbell. All rights reserved.</p>
            </div>
          </Column>
        </Layout>
      </Container>
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
    gridTemplateColumns: "1fr 2fr",
  },
});

const Column = styled("div", {
  base: {
    padding: "$md",

    "&:last-of-type": {
      borderLeft: "1px solid",
      borderColor: "$border",
    },
  },
});
