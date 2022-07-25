import React from 'react'
import { useSelector } from "react-redux";
import useFetchDataForUser from "../../Services/Hooks/useFetchDataForUser";
import { Heading } from "@chakra-ui/react";

const backendUrl = process.env.REACT_APP_API_URL;

export default function CurrentUserAllLinks() {
  const { user } = useSelector((state) => state.user);
  const userId = localStorage.getItem("id");

  const { userInfos } = useFetchDataForUser(
    `${backendUrl}/api/links?filters[userid][$eq]=${user?.user.id || userId}`
  );
  console.log({userInfos})

  return (
    <>
      <Heading mt={5}> All Your links </Heading>
      You have {userInfos?.meta?.pagination.total} links published.
    </>
  )
}
