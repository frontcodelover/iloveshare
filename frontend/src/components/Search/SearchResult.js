import { Heading, Box, Image, Stack, Tag, ButtonGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const backendUrl = process.env.REACT_APP_API_URL;

export default function SearchResult({ query }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const response = await fetch(
          `${backendUrl}/api/links?filters[name][$contains]=${query}&populate=*`
        );
        console.log(response);
        if (response.ok) {
          if (!ignore) {
            const fetchedData = await response.json();
            setData(fetchedData);
          }
        } else {
          setError("Error");
        }
      } catch (err) {
        setError("custom hook error", err);
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, [query]);

  console.log(data);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.data?.length >= 1 ? (
            <div>
              {data.data?.map((link) => (
                <Box
                  key={link.id}
                  w={"full"}
                  bg={"white"}
                  // boxShadow={"xl"}
                  rounded={"md"}
                  p={6}
                  overflow={"hidden"}
                  mt={6}
                  border={"1px"}
                  borderColor={"gray.200"}
                >
                  <Box
                    maxH={"500px"}
                    bg={"gray.100"}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={"relative"}
                  >
                    <Image
                      src={
                        backendUrl +
                        link?.attributes?.featuredimg?.data?.attributes?.url
                      }
                      maxH={"400px"}
                      objectFit="cover"
                      width="100%"
                    />
                  </Box>
                  <Stack>
                    <Heading
                      color={"black"}
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      mt={4}
                    >
                      <Link to={`/post/${link?.attributes?.slug}`}>
                        {link.attributes.name}
                      </Link>
                    </Heading>
                  </Stack>

                  <ButtonGroup float={"right"} mt={4} mr={10}></ButtonGroup>

                  {link.attributes.tagfromusers?.data.map((tag) => {
                    return (
                      <Tag
                        mr={2}
                        mt={5}
                        px={2}
                        py={1}
                        bg={tag.attributes.color}
                        color="white"
                        border="1px"
                        borderColor="transparent"
                        _hover={{
                          bg: tag.attributes.color,
                          borderColor: "gray.300",
                        }}
                      >
                        <Link to={`/t/${tag.attributes.slug}`}>
                          #{tag.attributes.name}
                        </Link>
                      </Tag>
                    );
                  })}
                </Box>
              ))}
            </div>
          ) : (
            <div>Aucun résultat</div>
          )}
        </div>
      )}
    </>
  );
}
