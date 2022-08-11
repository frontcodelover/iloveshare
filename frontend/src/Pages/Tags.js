import React, { useEffect, useState } from "react";
import { useFetchData } from "../Services/Hooks/useFetchData";
import { allLinks } from "../Services/ApiCalls/AllApiCalls";
import { Tag, Grid, GridItem, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//http://localhost:1337/api/links?populate=tag

export default function Tags() {
  const [tags, setTags] = useState([]);

  const backendUrl = process.env.REACT_APP_API_URL;

  const { data, isLoading, error } = useFetchData(`${backendUrl}/api/tagfromusers`);

  useEffect(() => {
    if (data) {
      setTags(data);
    }
  }, [data]);

  if (error) return <div>Error...</div>;
  if (!data) return <div>No data...</div>;

  // function ArrayOfTags() {
  //   const tagsArray = tags.data?.map((tag) => tag.attributes.tagfromusers);
  //   const tagsArrayFlat = tagsArray?.map((tags) => tags.data);
  //   console.log(tagsArrayFlat);
  //   // const tabflat = tagsArray?.flat();
  //   // const tableauNew = tabflat?.map((tags) => tags.name);
  //   // const uniqueArr = [...new Set(tableauNew)];
  //   // return uniqueArr;
  //   console.log("Arrayoftags", tagsArray)
  // }

  // ArrayOfTags();


  return (
    <>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Grid templateColumns={{md :"repeat(3, 1fr)", base :"repeat(1,1fr)" }} gap={6} my={20}>
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
                    <Link to={`/t/${tag.attributes.slug}`}>#{tag.attributes.name}</Link>
                  </Tag>
                  <Text fontSize={'sm'} mt={2}>
                  {tag.attributes.description.slice(0, 130)+"..."}
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
