import React from "react";
import { Container, Grid, GridItem, Box } from "@chakra-ui/react";
import SidebarLeft from "../Elements/SidebarLeft";
import SidebarRight from "../Elements/SidebarRight";

export default function About({ children }) {
  return (
    <Container maxW="1280px" className="scroll">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" colSpan={1}>
          <SidebarLeft />
        </GridItem>
        <GridItem w="100%" colSpan={3} mt={4}>
          <Box>{children}</Box>
        </GridItem>
        <GridItem w="100%" colSpan={1}>
          <SidebarRight />
        </GridItem>
      </Grid>
    </Container>
  );
}
