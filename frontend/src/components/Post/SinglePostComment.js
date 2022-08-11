import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import SinglePostCommentForm from "./SinglePostCommentForm";

const backendUrl = process.env.REACT_APP_API_URL;

export default function SinglePostComment({ postId, userId }) {
  const [comment, setComment] = useState(null);
  const [isCommented, setIsCommented] = useState(false);
  const [userWhoCommented, setUserWhoCommented] = useState(null);

  let userIdComment = [];

  useEffect(() => {
    axios
      .get(
        `${backendUrl}/api/comment/getCommentWithUser/?filters[postid][$eq]=${postId}`
      )
      .then((data) => {
        console.log(data.data.data);
        if (data.data.data.length > 0) {
          setComment(data.data.data);
          setIsCommented(true);
        } else {
          setComment("");
          setIsCommented(false);
        }
      });
  }, [postId, isCommented, userWhoCommented]);

  return (
    <>
      <Heading as="h3" size="sm">
        Commentaires
      </Heading>
      {isCommented ? (
        comment.map((comment) => {
          return (
            <Box background={"gray.100"} p={5}>
              <Text fontWeight={600}>{comment.user.username}</Text>
              <Text mb={5}>{comment?.bodycomment}</Text>
              <Text fontSize={"sm"}>
                Commentaire posté le{" "}
                {new Date(comment.createdAt).toLocaleDateString("fr-FR")}
              </Text>
              <Divider />
            </Box>
          );
        })
      ) : (
        <p>Aucun commentaire</p>
      )}
      {userId ? (
        <SinglePostCommentForm postId={postId} userId={userId} />
      ) : (
        <p>Vous devez être connecté pour commenter</p>
      )}
    </>
  );
}
