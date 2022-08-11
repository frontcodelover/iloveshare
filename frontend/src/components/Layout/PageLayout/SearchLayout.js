import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import SidebarLeft from "../Elements/SidebarLeft";
import SidebarRight from "../Elements/SidebarRight";
import Search from "../../../Pages/Search";

export default function SearchLayout() {
  return (
    <Container maxW="1280px" className="scroll">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" colSpan={1}>
          <SidebarLeft />
        </GridItem>
        <GridItem w="100%" colSpan={3} mt={4}>
          <Search />
        </GridItem>
        <GridItem w="100%" colSpan={1}>
          <SidebarRight />
        </GridItem>
      </Grid>
    </Container>
  );
}
