import React, { useEffect, useState } from "react";
import LoginRedirect from "./LoginRedirect";
import LoginBtn from "./LoginBtn";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import LogoutBtn from "./LogoutBtn";
import useFetchDataForUser from "../../Services/Hooks/useFetchDataForUser";

export default function Dashboard() {
  const { user } = useSelector((state) => state.user);
  const backendUrl = process.env.REACT_APP_API_URL;
  const [dataRes, setDataRes] = useState("{}");
  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch(`${backendUrl}/api/users/${user?.user.id || userId}`)
      .then((res) => res.json())
      .then((data) => setDataRes(data))
      .catch((err) => console.log(err));
  }, [backendUrl, user?.user.id, userId]);

  const { dataLinks, isLoading, error } = useFetchDataForUser(
    `${backendUrl}/api/links?filters[userid][$eq]=1`
  );

  return (
    <>
      {!token ? (
        <>
          <LoginRedirect />
          <LoginBtn />
        </>
      ) : (
        <>
          <Text fontSize="4xl">
            Welcome {user?.user?.username || dataRes?.username}
          </Text>
          <p>{user?.user?.email || dataRes?.email}</p>
          <LogoutBtn />
          {dataLinks?.data?.map((link) => (
            <>
              <p>{link.attributes.name}</p>
              <p>{link.attributes.url}</p>
            </>
          ))}
        </>
      )}
    </>
  );
}
