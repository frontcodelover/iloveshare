import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function LogoutBtn() {
  const history = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    setTimeout(() => history(`/`), 500);
  };

  const LogoutButton = (props) => (
    <button onClick={props.onClick}>Logout</button>
  );

  return (
    <Button colorScheme="red">
      <LogoutButton onClick={logout} />
    </Button>
  );
}
