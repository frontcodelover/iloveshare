import { Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import axios from "axios";

const backendUrl = process.env.REACT_APP_API_URL;

export default function SinglePostLike({ postId, userId }) {
  const [isLike, setIsLike] = useState(false);
  const [likeTotalCount, setLikeTotalCount] = useState(0);
  const [likeData, setLikeData] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/likes?filters[postId][$eq]=${postId}`)
      .then((data) => {
        setLikeData(data.data);
      });

    axios.get(`${backendUrl}/api/links/${postId}`).then((likes) => {
      console.log(likes.data.data.attributes.numberoflikes);
      setLikeTotalCount(likes.data.data.attributes.numberoflikes);
    });
  }, [userId, postId]);

  console.log(likeTotalCount);

  const handleLike = (e) => {
    e.preventDefault();

    console.log("isLike", isLike);
    if (isLike) {
    } else {
      setLikeTotalCount(likeTotalCount + 1);
      setIsLike(true);
    }
  };

  return (
    <>
      <button
        bg={"white"}
        _hover={{ bg: "white" }}
        _focus={{ bg: "white" }}
        onClick={handleLike}
      >
        {isLike ? <BsHeartFill color="red" /> : <BsHeart color="red" />}
      </button>

      <Text>{likeTotalCount} réactions</Text>
    </>
  );
}
