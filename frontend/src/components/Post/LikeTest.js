import React, {useState, useEffect} from 'react'
import { Button } from '@chakra-ui/react'
import axios from 'axios'

const backendUrl = process.env.REACT_APP_API_URL
const token = localStorage.getItem("jwt")

export default function LikeTest({ userId, postId }) {
    const [like, setLike] = useState(false)
    const [myId, setMyId] = useState(0)


    const random = Math.floor(Math.random() * 100)


    
    const handleLike = async (e) => {
        e.preventDefault()
        setLike(!like)
        await axios.post(`${backendUrl}/api/likes/`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            data: {
              id: random,
              postid: postId,
              userid: userId,
            },
            
        });   
        await axios.put(`${backendUrl}/api/links/${postId}?populate=*`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            data: {
                likes: [random],   
            }
        })


    }


  return (
      <>
        <Button onClick={handleLike}>
                Like
      </Button>
      </>
  )
}
