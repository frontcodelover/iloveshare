import React from "react";
import SidebarLeft from "./Elements/SidebarLeft";
import SidebarRight from "./Elements/SidebarRight";
import NavBar from "./Elements/NavBar";
import { Grid, GridItem, Container, Box } from "@chakra-ui/react";
import Routing from "../../Services/Routing/Routing";

export default function Frame({ children }) {
  return (
    <>
      <Grid
        templateColumns="(1, 1fr)"
        gap={4}
        h={"50px"}
        position={"relative"}
        zIndex={2}
        >
        <GridItem
          w="full"
          bg={"white"}
          h="65px"
          position={"fixed"}
          borderBottom={"1px"}
          borderColor={"gray.200"}
        >
          <Container maxW="1280px" className="scroll">
            <NavBar />
          </Container>
        </GridItem>
      </Grid>
      <Routing />
    </>
  );
}
