import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export default function EditSinglePost({ userid }) {
  console.log(userid);
  const { user } = useSelector((state) => state.user);

  console.log(user?.id);

  return (
    <>
      {user?.id === userid && (
        <div>
          <ButtonGroup>
            <Button colorScheme={"green"}>Edit</Button>
            <Button colorScheme={"red"}>Delete</Button>
          </ButtonGroup>
        </div>
      )}
    </>
  );
}
