import { Text, ButtonGroup } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import axios from "axios";

const backendUrl = process.env.REACT_APP_API_URL;

export default function SinglePostLike({ postId, userId }) {
  const [isLike, setIsLike] = useState(false);
  const [likeTotalCount, setLikeTotalCount] = useState(0);
  const [likeData, setLikeData] = useState([]);
  const [idOfLike, setIdOfLike] = useState(0);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/likes?filters[postId][$eq]=${postId}`)
      .then((data) => {
        setLikeData(data.data);
      });

    axios.get(`${backendUrl}/api/links/${postId}`).then((likes) => {
      setLikeTotalCount(likes.data.data.attributes.numberoflikes);
    });

    axios
      .get(
        `${backendUrl}/api/likes?filters[postId][$eq]=${postId}&filters[userId][$eq]=${userId}`
      )
      .then((getLikeData) => {
        if (getLikeData.data.data.length > 0) {
          setIsLike(true);
          setIdOfLike(getLikeData?.data?.data[0]?.id);
        } else {
          setIsLike(false);
        }
      });
  }, [userId, postId]);

  const handleLike = async (e) => {
    e.preventDefault();

    await axios.put(`${backendUrl}/api/links/${postId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        numberoflikes: likeTotalCount + 1,
      },
    });

    await axios.post(`${backendUrl}/api/likes/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        postid: postId,
        userid: userId,
      },
    });
    setLikeTotalCount(likeTotalCount + 1);
    setIsLike(true);
  };

  const handleUnlike = async (e) => {
    e.preventDefault();
    await axios.delete(`${backendUrl}/api/likes/${idOfLike}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setLikeTotalCount(likeTotalCount - 1);
    await axios.put(`${backendUrl}/api/links/${postId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        numberoflikes: likeTotalCount - 1,
      },
    });
    setIsLike(false);
  };

  return (
    <ButtonGroup pl={2}>
      <button
        bg={"white"}
        _hover={{ bg: "white" }}
        _focus={{ bg: "white" }}
        onClick={isLike ? handleUnlike : handleLike}
      >
        {isLike ? <BsHeartFill color="red" /> : <BsHeart color="red" />}
      </button>

      <Text fontSize={"md"}>{likeTotalCount} j'aime</Text>
    </ButtonGroup>
  );
}
