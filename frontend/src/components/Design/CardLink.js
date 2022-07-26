import React from "react";
import {
  Stack,
  Wrap,
  WrapItem,
  Avatar,
  Text,
  Heading,
  Tag,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CardLink({
  avatar,
  linkid,
  createdAt,
  name,
  tags,
  url,
  userid,
  userName,
}) {
  return (
    <Stack
      key={linkid}
      background={"white"}
      p={5}
      mt={5}
      borderRadius={10}
      borderColor="gray.200"
      borderWidth="1px"
    >
      <Wrap>
        <WrapItem>
          <Avatar size="sm" name={userName} src={avatar} />

          <Stack direction="column" ml={2} mt={0} p={0}>
            <Text fontSize="xs" fontWeight="bold">
              {userName}
            </Text>
            <Text fontSize="xs" mt={0}>
              {createdAt.split("T")[0]}
            </Text>
          </Stack>
        </WrapItem>
      </Wrap>
      <Stack pl={10}>
        <Heading as="h2" size="xl">
          <h1>{name}</h1>
        </Heading>
        <Text mt={4}>{url}</Text>
        <p>
          {tags?.map((tag) => {
            return (
              <Tag
                mr={2}
                mt={5}
                px={2}
                py={1}
                colorScheme="white"
                color="teal.900"
                border="1px"
                borderColor="transparent"
                _hover={{ bg: "gray.50", borderColor: "gray.600" }}
              >
                <Link to={`/t/${tag.name}`}>#{tag.name}</Link>
              </Tag>
            );
          })}
        </p>
      </Stack>
    </Stack>
  );
}
