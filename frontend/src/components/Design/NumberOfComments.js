import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text } from "@chakra-ui/react";

const backendUrl = process.env.REACT_APP_API_URL;

export default function NumberOfComments({ postId }) {
    const [numberOfComments, setNumberOfComments] = useState(0);
    

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/comments?filters[postid][$eq]=${postId}`)
      .then((data) => {
        console.log("comment : ", data);
        if (data.data.data.length > 0) {
          setNumberOfComments(data.data.data.length);
        } else {
          setNumberOfComments(0);
        }
      });
  }, [backendUrl, postId]);
  console.log("first useEffect");

    return <Text ml={2}>

        {
            numberOfComments > 1 ? numberOfComments + " commentaires" : numberOfComments + " commentaire"
   
        }


    </Text>;
}
