import React from "react";
import { Text, Flex, Tag, Heading } from "@chakra-ui/react";
import { useFetchData } from "../../../Services/Hooks/useFetchData";
import { Link } from "react-router-dom";

const backendUrl = process.env.REACT_APP_API_URL;

export default function TagsFeature() {
  const { data, isLoading, error } = useFetchData(
    `${backendUrl}/api/tagfromusers`
  );
  return (
    <Flex
      direction={"column"}
      bg={"white"}
      p={8}
      mt={6}
      borderRadius={"xl"}
      border={"1px"}
      borderColor={"gray.200"}
      width={"auto"}
    >
      <Heading as="h3" size="md" mb={5}>
        #tags
      </Heading>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        data.data?.map((tag) => (
          <Tag
            mr={2}
            my={1}
            px={2}
            py={1}
            display={"flex"}
            width={"fit-content"}
            maxW={"auto"}
            bg={tag.attributes.color}
            color="white"
            border="1px"
            borderColor="transparent"
            _hover={{ bg: tag.attributes.color }}
            key={tag.id}
          >
            <Link to={`/t/${tag.attributes.slug}`}>#{tag.attributes.name}</Link>
          </Tag>
        ))
      )}
    </Flex>
  );
}
