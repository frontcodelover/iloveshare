import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import LogoutBtn from "./LogoutBtn";

const backendUrl = process.env.REACT_APP_API_URL;

const providersNames = ["google"];

const LoginButton = (props) => (
  <Button colorScheme="blue" leftIcon={<FaGoogle />}>
    <a href={`${backendUrl}/api/connect/${props.providerName}`}>
      Se connecter avec {props.providerName}{" "}
    </a>
  </Button>
);
const LoginBtn = (props) => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("jwt"));

  let buttons;

  if (isLogged) {
    <LogoutBtn />;
  } else {
    buttons = (
      <>
        {providersNames.map((providerName, i) => (
          <div key={providerName}>
            <LoginButton providerName={providerName} />
          </div>
        ))}
      </>
    );
  }

  let text;

  if (isLogged) {
    text = `Welcome ${localStorage.getItem("username")}, you are connected!`;
  } else {
    text = "";
  }

  return (
    <>   
      {buttons}
    </>
  );
};

export default LoginBtn;
