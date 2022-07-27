import React, { useState, useEffect } from "react";
import LoginRedirect from "../components/User/LoginRedirect";
import LoginBtn from "../components/User/LoginBtn";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();

  const token = localStorage.getItem("jwt");

  console.log("token", token);
  useEffect(() => {
    if (token) {
      setTimeout(() => history(`/dashboard/`), 3000); // Redirect to homepage after 3 sec
    } else {
      setIsLoading(false);
    }
  }, [history, token]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <LoginRedirect />
          <LoginBtn />
        </>
      )}
    </>
  );
}
