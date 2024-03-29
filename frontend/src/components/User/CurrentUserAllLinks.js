import React from 'react'
import { useSelector } from "react-redux";
import useFetchDataForUser from "../../Services/Hooks/useFetchDataForUser";
import { Heading } from "@chakra-ui/react";

const backendUrl = process.env.REACT_APP_API_URL;

export default function CurrentUserAllLinks() {
  const { user } = useSelector((state) => state.user);
  const userId = localStorage.getItem("id");

  const { userInfos } = useFetchDataForUser(
    `${backendUrl}/api/links?filters[userid][$eq]=${user?.id || userId}`
  );


  return (
    <>
      <Heading mt={5}> Vos partages </Heading>
      Vous avez partagé {userInfos?.meta?.pagination.total} articles.
    </>
  )
}
