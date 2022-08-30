import React from 'react'
import AddLinkView from '../../../Pages/AddLink/AddLinkView'
import {Grid, GridItem, Container} from '@chakra-ui/react'

export default function AddPostLayout() {
  return (
    <Container maxW="1280px" className="scroll">
    <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={4}>
    
      <GridItem colSpan={5} mt={4}>
        <AddLinkView />
      </GridItem>
     
    </Grid>
  </Container>
  )
}
