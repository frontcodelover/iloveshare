import React from 'react'
import {Text, Flex} from '@chakra-ui/react'

export default function TagsFeature() {
  return (
    <Flex direction={'column'}
    bg={'white'}
    p={8}
    mt={6}
    borderRadius={'xl'}
    border={'1px'}
    borderColor={'gray.200'}
    >
      <Text>#React</Text>
      <Text>#Javascript</Text>
      <Text>#Css</Text>
      <Text>#Html</Text>
      <Text>#Productivité</Text>
    </Flex>
  )
}
