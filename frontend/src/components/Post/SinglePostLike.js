import { Button } from '@chakra-ui/react';
import React, {useState} from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';

export default function SinglePostLike() {
  const [isLike, setIsLike] = useState(false);

  return (
    <Button bg={'white'} w={'50px'} onClick={() => setIsLike(!isLike)}>
      {isLike ? <BsHeartFill color='red' /> : <BsHeart color='red' />}
    </Button>
  )
}
