import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaRegCommentDots } from "react-icons/fa";

const backendUrl = process.env.REACT_APP_API_URL;

export default function NumberOfComments({ postId }) {
  const [numberOfComments, setNumberOfComments] = useState(0);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/comments?filters[postid][$eq]=${postId}`)
      .then((data) => {
        if (data.data.data.length > 0) {
          setNumberOfComments(data.data.data.length);
        } else {
          setNumberOfComments(0);
        }
      });
  }, [postId]);

  return (
    <Flex ml={4} fontWeight={500}><Text mt={1}><FaRegCommentDots/></Text><Text ml={1}>{numberOfComments}</Text></Flex>
  );
}
