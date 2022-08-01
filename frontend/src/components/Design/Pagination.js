import { Flex, Spacer, Text, ButtonGroup, Button } from '@chakra-ui/react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import React from 'react'

export default function Pagination({page, pageCountMax, handleNext, handlePrevious}) {
  return (
    <Flex mt={0} gap="3" alignItems="right">
    <Spacer />
    <Text mt={2}>
              Page {page} / {pageCountMax}
    </Text>
    <ButtonGroup gap="2">
      <Button onClick={handlePrevious} colorScheme="teal" color="white">
        <IoMdArrowDropleft />
      </Button>

      <Button onClick={handleNext} colorScheme="teal" color="white">
        <IoMdArrowDropright />
      </Button>
    </ButtonGroup>
  </Flex>
  )
}
