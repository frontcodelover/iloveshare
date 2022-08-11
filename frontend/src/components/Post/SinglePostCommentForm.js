import React, { useState } from "react";
import axios from "axios";
import { Heading, Textarea, Button } from "@chakra-ui/react";

const backendUrl = process.env.REACT_APP_API_URL;
const token = localStorage.getItem("jwt");

export default function SinglePostCommentForm({ postId, userId }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${backendUrl}/api/comments`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        userid: userId,
        postid: postId,
        bodycomment: inputs.bodycomment,
      },
    });
  };

  return (
    <>
      <Heading as="h3" size="sm">
        Ajouter un commentaire
      </Heading>
      <form onSubmit={handleSubmit}>
        <Textarea
          type="text"
          name="bodycomment"
          value={inputs.bodycomment}
          onChange={handleChange}
        />
        <Button colorScheme={"green"} mt={3} type="submit" value="Ajouter">
          Ajouter
        </Button>
      </form>
    </>
  );
}
