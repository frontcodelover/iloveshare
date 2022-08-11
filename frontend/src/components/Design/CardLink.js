//! TAG need to be fixed

import React from "react";
import {
  Stack,
  Wrap,
  WrapItem,
  Avatar,
  Text,
  Tag,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TitleBase from "../Design/TitleBase";

export default function CardLink({
  avatar,
  linkid,
  createdAt,
  name,
  tags,
  url,
  userName,
  featuredImgSrc,
  tagName,
  userId,
  slug,
}) {
  return (
    <Stack
      key={linkid}
      background={"white"}
      mt={5}
      pb={5}
      borderRadius={10}
      borderColor="gray.200"
      borderWidth="1px"
    >
      <Wrap>
        <Image
          src={featuredImgSrc}
          alt="avatar"
          maxH={300}
          width="100%"
          objectFit="cover"
          roundedTop={10}
        />
        <WrapItem p={5}>
          <Avatar size="sm" name={userName} src={avatar} />

          <Stack direction="column" ml={2} mt={0}>
            <Link to={`/profile/${userId}`}>
              <Text fontSize="xs" fontWeight="bold">
                {userName}
              </Text>
            </Link>
            <Text fontSize="xs" mt={0}>
              {createdAt.split("T")[0]}
            </Text>
          </Stack>
        </WrapItem>
      </Wrap>
      <Stack pl={10}>
        <Link to={`/post/${slug}`}>
          <TitleBase
            as="h2"
            size="2xl"
            fontWeight={"extrabold"}
            title={name}
          ></TitleBase>
        </Link>
        <Text mt={4}>{url}</Text>
        <>
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
            <>
              <Link to={`/t/${tagName}`}>#{tagName}</Link>
            </>
          </Tag>
        </>
      </Stack>
    </Stack>
  );
}
