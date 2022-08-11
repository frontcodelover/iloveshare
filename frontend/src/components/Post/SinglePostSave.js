import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const backendUrl = process.env.REACT_APP_API_URL;

export default function SinglePostLike({ postId, userId }) {
  const [isSave, setIsSave] = useState(false);
  const [saveStatus, setSaveStatus] = useState("Sauver");
  const [getIdOfSave, setGetIdOfSave] = useState(0);
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    axios
      .get(
        `${backendUrl}/api/saves?filters[postid][$eq]=${postId}&filters[userid][$eq]=${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((getSaveData) => {
        if (getSaveData.data.data.length > 0) {
          setIsSave(true);
          setGetIdOfSave(getSaveData?.data?.data[0]?.id);
        } else {
          setIsSave(false);
        }
      });
  }, [userId, postId, token]);

  const handleSave = async (e) => {
    e.preventDefault();
    await axios.post(`${backendUrl}/api/saves`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        userid: userId,
        postid: postId,
      },
    });
    setSaveStatus("Sauvé");
    setIsSave(true);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`${backendUrl}/api/saves/${getIdOfSave}`);
    setSaveStatus("Sauver");
    setIsSave(false);
  };

  return (
    <Button
      colorScheme={"gray"}
      size={"sm"}
      border={"1px"}
      borderColor={"gray.300"}
      onClick={isSave ? handleDelete : handleSave}
    >
      {isSave ? "Suppimer" : "Sauver"}
    </Button>
  );
}
