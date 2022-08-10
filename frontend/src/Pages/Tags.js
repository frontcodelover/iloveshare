import React, { useEffect, useState } from "react";
import { useFetchData } from "../Services/Hooks/useFetchData";
import { allLinks } from "../Services/ApiCalls/AllApiCalls";
import { Tag, Grid, GridItem, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//http://localhost:1337/api/links?populate=tag

export default function Tags() {
  const [tags, setTags] = useState([]);

  const { data, isLoading, error } = useFetchData(`${allLinks}populate=tag`);

  useEffect(() => {
    if (data) {
      setTags(data);
    }
  }, [data]);

  if (error) return <div>Error...</div>;
  if (!data) return <div>No data...</div>;

  function ArrayOfTags() {
    const tagsArray = tags.data?.map((tag) => tag.attributes.tag);
    const tabflat = tagsArray?.flat();
    const tableauNew = tabflat?.map((tags) => tags.name);
    const uniqueArr = [...new Set(tableauNew)];
    return uniqueArr;
  }

  return (
    <>
      <h1>Tags</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {ArrayOfTags().map((tag) => (
              <GridItem w="100%" >
                <Flex
                  align="top"
                  justify="left"
                  direction="column"
                  bg={"white"}
                  height="200px"
                  width={"100%"}
                  borderRadius="lg"
                  boxShadow="lg"
                  p={4}
                  borderTop="20px solid red"
                  // border="1px"
                  // borderColor="gray.200"
                >
                  <Tag
                    colorScheme="white"
                    color="teal.900"
                    border="1px"
                    borderColor="transparent"
                    fontSize={["sm", "md", "xl"]}
                    key={tag}
                  >
                    <Link to={`/t/${tag}`}>#{tag}</Link>
                  </Tag>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
