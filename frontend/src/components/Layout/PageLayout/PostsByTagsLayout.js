import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import PostByTags from "../../Tags/PostByTags";

export default function PostsByTagsLayout() {
  return (
    <>
      <Container maxW="1280px" className="scroll">
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          <GridItem w="100%">
            <PostByTags />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
