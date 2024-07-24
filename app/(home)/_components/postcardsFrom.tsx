import { styled } from "@/styled-system/jsx";

import Container from "@/components/container";

export default function PostcardsFrom() {
  return (
    <Container variant="section" align="center">
      <Grid>
        <Intro>
          <h6>Postcards From</h6>
        </Intro>

        <List>
          <ListItem>
            <Number>01.</Number>
            <Text className="text">England</Text>
          </ListItem>
          <ListItem>
            <Number>02.</Number>
            <Text className="text">Charleston</Text>
          </ListItem>
          <ListItem>
            <Number>03.</Number>
            <Text className="text">New York City</Text>
          </ListItem>
          <ListItem>
            <Number>04.</Number>
            <Text className="text">Maine</Text>
          </ListItem>
          <ListItem>
            <Number>05.</Number>
            <Text className="text">Greenville, SC</Text>
          </ListItem>
          <ListItem>
            <Number>06.</Number>
            <Text className="text">Asheville, NC</Text>
          </ListItem>
        </List>

        <Image />
      </Grid>
    </Container>
  );
}

const Grid = styled("div", {
  base: {
    alignItems: "center",
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(1fr)",
    gap: "clamp(1rem, 0.5rem + 2.5vi, 2.5rem)",

    md: { gridTemplateColumns: "20px 1fr 1fr" },
  },
});

const Intro = styled("div", {
  base: {
    transform: "rotate(-90deg) translateX(-100%)",
    width: "200px",
    transformOrigin: "top left",
    alignSelf: "start",

    "& h6": { margin: "0" },
  },
});

const List = styled("ul", {
  base: {
    textAlign: "left",
    marginTop: "$lg",
    marginBottom: "$lg",
  },
});

const Number = styled("h6", {
  base: {
    margin: 0,
  },
});

const Text = styled("h2", {
  base: {
    margin: 0,
  },
});

const ListItem = styled("li", {
  base: {
    cursor: "pointer",
    display: "flex",
    flexDir: "row",
    gap: "$xs",
    borderTop: "1px solid",
    borderColor: "$border",
    margin: "0",
    padding: "$sm",
    width: "100%",

    _first: {
      borderTop: "none",
    },

    _last: {
      borderBottom: "none",
    },

    _hover: {
      "& h2": {
        fontStyle: "italic",
      },
    },
  },
});

const Image = styled("div", {
  base: {
    background: "tan.4",
    height: "100%",
  },
});
