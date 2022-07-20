import { useParams } from "react-router-dom";
import { Heading, Tag, Stack, Text } from "@chakra-ui/react";
import useFetchDataByTags from "../../Services/Hooks/useFetchDataByTags";

export default function PostByTags() {
  let { tags } = useParams();
  let dataResFilterByTags = useFetchDataByTags();

  return (
    <div>
      <Heading as="h1" size="xl" noOfLines={1}>{`#${tags}`}</Heading>

      {dataResFilterByTags.length === 0 ? (
        <Text>No result for this tag #{tags}</Text>
      ) : (
        dataResFilterByTags.map((link) => (
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
        ))
      )}
    </div>
  );
}
