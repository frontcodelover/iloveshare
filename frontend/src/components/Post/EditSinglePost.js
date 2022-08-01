import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function EditSinglePost({ userid, postid }) {

  const { user } = useSelector((state) => state.user);



  return (
    <>
      {user?.id === userid && (
        <div>
          <ButtonGroup>
            <Link to={`/post/edit/${postid}`}>
            <Button colorScheme={"green"}>Edit</Button>
            </Link>
            <Button colorScheme={"red"}>Delete</Button>
          </ButtonGroup>
        </div>
      )
      } 
    </>
  );
}
