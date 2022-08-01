import { Button } from '@chakra-ui/react';
import React, {useState} from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';

export default function SinglePostLike() {
  const [isLike, setIsLike] = useState(false);

  return (
    <button bg={'white'} _hover={{bg:'white'}} _focus={{bg:'white'}} onClick={() => setIsLike(!isLike)}>
      {isLike ? <BsHeartFill color='red' /> : <BsHeart color='red' />}
    </button>
  )
}
