import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import SidebarRight from "../Elements/SidebarRight";
import SinglePostLike from "../../Post/SinglePost";

export default function PostLayout() {
  return (
    <Container maxW="1280px" className="scroll">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="auto" colSpan={{ base:5, md: 4 }} mt={4}>
          <SinglePostLike />
        </GridItem>
        <GridItem w="auto" colSpan={{ base:0, md: 1 }}>
          <SidebarRight />
        </GridItem>
      </Grid>
    </Container>
  );
}
