import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserData } from "../../Services/Redux/feature/user.slice";



export default function LogoutBtn({color}) {
  const history = useNavigate();
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    dispatch(setCurrentUserData(null));
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
