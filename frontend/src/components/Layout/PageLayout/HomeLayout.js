import React from 'react'
import { Container, Grid, GridItem, Box } from '@chakra-ui/react'
import SidebarLeft from '../Elements/SidebarLeft'
import SidebarRight from '../Elements/SidebarRight'
import Home from '../../Home/Home'
import LastMembers from '../Elements/LastMembers'
import TagsFeature from '../Elements/TagsFeature'

export default function HomeLayout() {
  return (

    <Container maxW="1280px" className="scroll">
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem colSpan={1}>
        <SidebarLeft />
        <TagsFeature  />
        <LastMembers />
      </GridItem>
      <GridItem colSpan={{base:5, md:3}} mt={4}>
      <Home />
      </GridItem>
      <GridItem colSpan={1}>
        <SidebarRight />
      </GridItem>
    </Grid>
  </Container>
  )
}
