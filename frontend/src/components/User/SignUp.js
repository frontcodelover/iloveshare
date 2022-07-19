import React, {useState, useEffect} from "react";
import LoginRedirect from "./LoginRedirect";
import LoginBtn from "./LoginBtn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();
  
  const { user } = useSelector((state) => state.user)
  console.log(user)

  useEffect(() => {
    if (user) {
      console.log("use",user == null)
      setTimeout(() => history(`/`), 3000); // Redirect to homepage after 3 sec
  } else {
      setIsLoading(false);
    }
  }
  , [user]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
          <>
      <LoginRedirect />
      <LoginBtn />
        </>
      )
      }
    </>
  );
}
