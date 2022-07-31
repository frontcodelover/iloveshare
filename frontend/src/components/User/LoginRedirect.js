import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserData } from "../../Services/Redux/feature/user.slice";

const backendUrl = process.env.REACT_APP_API_URL;

const LoginRedirect = (props) => {
  const [currentUserId, setCurrentUserId] = useState(0);
  const location = useLocation();
  const params = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(`${backendUrl}/api/auth/google/callback${location.search}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        localStorage.setItem("jwt", res.jwt);
        localStorage.setItem("username", res.user.username);
        localStorage.setItem("id", res.user.id);
        setCurrentUserId(res.user.id);
        console.log(res);
        dispatch(setCurrentUserData(res.user));
        setTimeout(() => history(`/dashboard/`), 0); // Redirect to homepage after 3 sec
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    history,
    location.search,
    params.providerName,
    currentUserId,
    dispatch,
    user,
  ]);

  return <p></p>;
};

export default LoginRedirect;
