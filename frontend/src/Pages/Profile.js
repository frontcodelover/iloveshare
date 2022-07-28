import { Wrap, Flex, Box } from "@chakra-ui/react";
import React from "react";
import UserRemuseCard from "../components/User/UserResumeCard";
import UserResumePost from "../components/User/UserResumePost";


export default function Profile() {
  return (
    <>
    <Flex direction="row" gap='2'>
      <Box flex='2'>
      <UserResumePost />
      </Box>
      <Box flex='1'>
        <UserRemuseCard />
      </Box>

    </Flex>
    </>
  );
}
