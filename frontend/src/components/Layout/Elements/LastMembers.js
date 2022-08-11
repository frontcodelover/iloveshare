import { Flex, Avatar, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { useFetchData } from "../../../Services/Hooks/useFetchData";
import { Link } from "react-router-dom";

const backendUrl = process.env.REACT_APP_API_URL;

export default function LastMembers() {
  const { data, isLoading, error } = useFetchData(
    `${process.env.REACT_APP_API_URL}/api/users?populate=*&sort=createdAt:desc&limit=5`
  ); // fetch data from api

  console.log(data);

  return (
    <Flex
      direction={"column"}
      bg={"white"}
      p={8}
      mt={6}
      borderRadius={"xl"}
      border={"1px"}
      borderColor={"gray.200"}
    >
      <Heading as="h3" size="md" mb={5}>
        Derniers membres
      </Heading>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        data?.map((user) => (
          <Text
            mr={2}
            my={1}
            px={2}
            py={1}
            display={"flex"}
            width={"fit-content"}
            maxW={"auto"}
            border={"1px"}
            borderColor={"transparent"}
            key={user.id}
          >
            <Avatar src={backendUrl + user?.photo?.url} size="sm" mr={2} />
            <Link to={`/profile/${user.username}`}>{user.username}</Link>
          </Text>
        ))
      )}
    </Flex>
  );
}
