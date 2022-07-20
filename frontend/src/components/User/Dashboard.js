import React, { useEffect, useState } from "react";
import LoginRedirect from "./LoginRedirect";
import LoginBtn from "./LoginBtn";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Text } from '@chakra-ui/react'

export default function Dashboard() {

 const { user } = useSelector((state) => state.user)
  const backendUrl = process.env.REACT_APP_API_URL;
  const [dataRes, setDataRes] = useState('{}');

  let tab = [];
  useEffect(() => { 
    fetch(`${backendUrl}/api/users/${user?.user.id}`)
      .then((res) => res.json())
      .then((data) => setDataRes(data))
      .catch((err) => console.log(err));
  }, [backendUrl, user?.user.id]);

tab.push(dataRes);
 
  console.log(tab);

  return (
    <>
      {!user ? (
        <>
          <LoginRedirect />
          <LoginBtn />
        </>
      ) : (
        <>
          <Text fontSize='4xl'>Welcome {user.user.username}</Text>
          <p>{user.user.email}</p>
        </>
      )}

    </>
  );
}
