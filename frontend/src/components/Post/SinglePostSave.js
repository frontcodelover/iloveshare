import { Button } from '@chakra-ui/react';
import React, {useState} from 'react'
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs';

export default function SinglePostLike() {
  const [isSave, setIsSave] = useState(false);

  return (
    <Button colorScheme={"gray"} size={'sm'} border={'1px'} borderColor={'gray.300'} onClick={() => setIsSave(!isSave)} >
      {isSave ? "Suppimer" : "Sauver"}
    </Button>
  )
}
