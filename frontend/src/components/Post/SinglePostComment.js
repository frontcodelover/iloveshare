import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading } from "@chakra-ui/react";
import SinglePostCommentForm from "./SinglePostCommentForm";

const backendUrl = process.env.REACT_APP_API_URL;

export default function SinglePostComment({ postId, userId }) {
  const [comment, setComment] = useState(null);
  const [isCommented, setIsCommented] = useState(false);
  const [userWhoCommented, setUserWhoCommented] = useState(null);

  let userIdComment = [];

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/comments?filters[postId][$eq]=${postId}`)
      .then((data) => {
        // console.log(data);
        if (data.data.data.length > 0) {
          setComment(data.data.data);
          setIsCommented(true);
        } else {
          setComment("");
          setIsCommented(false);
        }
      });
      axios.get (`${backendUrl}/api/users`).then((data) => {
        // console.log(data);
        if (data.data.data.length > 0) {
          setUserWhoCommented(data.data.data);
        } else {
          setUserWhoCommented("");
        }
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setUserWhoCommented(userWhoCommented);
      })
      

      
    }, [postId, isCommented, userWhoCommented]);
    
    // comment?.map((user) => {
    //   return userIdComment.push(user.attributes.userid);
    // })
    // const idUserComment = async  getUserWhoCommented => {
    //   await axios.get(`${backendUrl}/api/users/${getUserWhoCommented}`).then((data) => {
    //     // console.log(data);
    //     if (data.data.data.length > 0) {
    //       setUserWhoCommented(data.data.data);
    //     } else {
    //       setUserWhoCommented("");
    //     }
    //   }).catch((err) => {
    //     console.log(err);
    //   }).finally(() => {
    //     setUserWhoCommented(userWhoCommented);
    //   }
    //   )
    // }


    if (userIdComment.length > 0) {
      
  for (let i = 0; i < userIdComment.length; i++) {
      axios.get(`${backendUrl}/api/users/${userIdComment[i]}`).then((data) => {
          console.log(data);
           setUserWhoCommented(data.data);
        }).catch((err) => {
            console.log(err);
          }).finally(() => {
      console.log("finally");
    })

  }
    }
  

  console.log(userWhoCommented);


  console.log(userIdComment);

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
