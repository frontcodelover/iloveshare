import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export default function LogoutBtn({color}) {
  const history = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    setTimeout(() => history(`/`), 500);
  };

  const LogoutButton = (props) => (
    <button onClick={props.onClick}>Se déconnecter</button>
  );

  return (
    <Text color={color}>
      <LogoutButton onClick={logout}/> 
    </Text>
  );
}
