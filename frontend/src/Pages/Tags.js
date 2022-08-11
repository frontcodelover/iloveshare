import React, { useEffect, useState } from "react";
import { useFetchData } from "../Services/Hooks/useFetchData";
import { Tag, Grid, GridItem, Flex, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Tags() {
  const [tags, setTags] = useState([]);

  const backendUrl = process.env.REACT_APP_API_URL;

  const { data, isLoading, error } = useFetchData(
    `${backendUrl}/api/tagfromusers`
  );

  useEffect(() => {
    if (data) {
      setTags(data);
    }
  }, [data]);

  if (error) return <div>Error...</div>;
  if (!data) return <div>No data...</div>;

  return (
    <>
      <Heading as="h1" size="lg" my={10}>
        Les tags
      </Heading>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Grid
            templateColumns={{ md: "repeat(3, 1fr)", base: "repeat(1,1fr)" }}
            gap={6}
            mb={20}
          >
            {tags.data?.map((tag) => (
              <GridItem w="100%" key={tag.id}>
                <Flex
                  align="top"
                  justify="left"
                  direction="column"
                  bg={"white"}
                  height="220px"
                  width={"100%"}
                  borderRadius="lg"
                  boxShadow="lg"
                  p={4}
                  borderTop={`20px solid`}
                  borderColor={tag.attributes.color}
                >
                  <Tag
                    colorScheme="white"
                    color="teal.900"
                    border="1px"
                    borderColor="transparent"
                    fontSize={["sm", "md", "xl"]}
                    key={tag}
                  >
                    <Link to={`/t/${tag.attributes.slug}`}>
                      #{tag.attributes.name}
                    </Link>
                  </Tag>
                  <Text fontSize={"sm"} mt={2}>
                    {tag.attributes.description.slice(0, 130) + "..."}
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
