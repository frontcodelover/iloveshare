import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading } from "@chakra-ui/react";
import SinglePostCommentForm from "./SinglePostCommentForm";

const backendUrl = process.env.REACT_APP_API_URL;

export default function SinglePostComment({ postId, userId }) {
  const [comment, setComment] = useState(null);
  const [isCommented, setIsCommented] = useState(false);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/comments?filters[postId][$eq]=${postId}`)
      .then((data) => {
        console.log(data);
        if (data.data.data.length > 0) {
          setComment(data.data.data);
          setIsCommented(true);
        } else {
          setComment("");
          setIsCommented(false);
        }
      });
  }, [backendUrl, postId]);

  return (
    <>
      <Heading as="h3" size="sm">
        Commentaires
      </Heading>
      {isCommented ? (
        comment.map((comment) => {
          return (
            <div>
              <p>{comment?.attributes?.bodycomment}</p>
            </div>
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
