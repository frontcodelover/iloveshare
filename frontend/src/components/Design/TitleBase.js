import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function TitleBase({title}) {
  return (
    <Heading as="h2" size={"2xl"} fontWeight={'extrabold'} color={'black'}>{title}</Heading>
  )
}
