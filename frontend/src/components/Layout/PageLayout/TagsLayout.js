import React from 'react'
import { Container, Grid, GridItem } from '@chakra-ui/react'
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
