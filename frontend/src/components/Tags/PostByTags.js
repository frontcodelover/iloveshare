import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heading, Tag, Stack, Feature, Box, Text } from "@chakra-ui/react";

export default function PostByTags() {
  let { tags } = useParams();
  const [dataResFilterByTags, setDataResFilterByTags] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:1337/api/links?populate=*&filters[tag][name]=${tags}`
    )
      .then((res) => res.json())
      .then((data) => setDataResFilterByTags(data.data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Heading as="h1" size="xl" noOfLines={1}>{`#${tags}`}</Heading>
      {console.log(dataResFilterByTags)}
      {dataResFilterByTags.map((link) => {
        return (
          <Stack
            key={link.id}
            background={"white"}
            p={5}
            mt={5}
            borderRadius={10}
          >
            <Heading fontSize="xl">{link.attributes.name}</Heading>
            <p>{link.id}</p>
            <Text mt={4}>{link.attributes.url}</Text>
            <p>{link.attributes.type}</p>

            <p>
              {link.attributes.tag.map((tags) => {
                return (
                  <Tag mr={2} mt={5}>
                    {tags.name}
                  </Tag>
                );
              })}
            </p>
          </Stack>
        );
      })}
    </div>
  );
}
