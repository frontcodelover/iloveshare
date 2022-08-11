import { Text, ButtonGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import { ImArrowUp2 } from "react-icons/im";
import axios from "axios";

const backendUrl = process.env.REACT_APP_API_URL;

export default function SinglePostLike({ postId, userId, link }) {
  const [isLike, setIsLike] = useState(link?.userHasLike);
  const [likeTotalCount, setLikeTotalCount] = useState(parseInt(link?.likes));
  // const [likeData, setLikeData] = useState([]);
  const [idOfLike, setIdOfLike] = useState(link?.userHasLikeId);

  const myWeirduserId = localStorage.getItem("id");

  const token = localStorage.getItem("jwt");

  const handleLike = async (e) => {
    e.preventDefault();

    await axios.post(`${backendUrl}/api/likes/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        postid: postId,
        userid: myWeirduserId, // userId,
      },
    });

    await axios
      .get(`${backendUrl}/api/links/${postId}?userId=${myWeirduserId}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setIdOfLike(response.data?.data?.userHasLikeId);
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
    setIsLike(false);
  };

  function colorSet() {
    if (isLike) {
      return "#48bb78";
    } else {
      return "black";
    }
  }

  return (
    <ButtonGroup pl={2}>
      <button
        bg={"white"}
        _hover={{ bg: "white" }}
        _focus={{ bg: "white" }}
        onClick={myWeirduserId ? (isLike ? handleUnlike : handleLike) : null}
      >
        {isLike ? (
          <ImArrowUp2 color={"#48bb78"} />
        ) : (
          <ImArrowUp2 color="black" />
        )}
      </button>
      <Text fontSize="md" mx={"0!important"} color={colorSet} fontWeight={500}>
        +{likeTotalCount}
      </Text>
    </ButtonGroup>
  );
}
