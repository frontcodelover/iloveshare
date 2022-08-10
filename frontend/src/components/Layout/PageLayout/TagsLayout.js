import React from 'react'
import { Container, Grid, GridItem, Box } from '@chakra-ui/react'
import SidebarLeft from '../Elements/SidebarLeft'
import SidebarRight from '../Elements/SidebarRight'
import Home from '../../Home/Home'
import Tags from '../../../Pages/Tags'

export default function TagsLayout() {
  return (

    <Container maxW="1280px" className="scroll">
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
     
      <GridItem w="100%">
      <Tags />
      </GridItem>
      
    </Grid>
  </Container>
  )
}
