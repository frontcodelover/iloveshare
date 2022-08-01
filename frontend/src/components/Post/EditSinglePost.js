import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditSinglePost({ userid, postid }) {
  const history = useNavigate();

  const token = localStorage.getItem("jwt");

  const backendUrl = process.env.REACT_APP_API_URL;
  const { user } = useSelector((state) => state.user);

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`${backendUrl}/api/links/${postid}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    history("/");
  };

  return (
    <>
      {user?.id === userid && (
        <div>
          <ButtonGroup>
            <Link to={`/post/edit/${postid}`}>
              <Button colorScheme={"green"}>Edit</Button>
            </Link>
            <Button onClick={handleDelete} colorScheme={"red"}>
              Delete
            </Button>
          </ButtonGroup>
        </div>
      )}
    </>
  );
}
