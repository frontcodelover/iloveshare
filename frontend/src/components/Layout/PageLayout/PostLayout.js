import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import SidebarRight from "../Elements/SidebarRight";
import SinglePostLike from "../../Post/SinglePost";

export default function PostLayout() {
  return (
    <Container maxW="1280px" className="scroll">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" colSpan={4} mt={4}>
          <SinglePostLike />
        </GridItem>
        <GridItem w="100%" colSpan={1}>
          <SidebarRight />
        </GridItem>
      </Grid>
    </Container>
  );
}
