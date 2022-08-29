import { useParams } from "react-router-dom";
import { Heading, Tag, Stack, Text, Image, Flex, Spinner, Center } from "@chakra-ui/react";
import useFetchDataByTags from "../../Services/Hooks/useFetchDataByTags";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = process.env.REACT_APP_API_URL;

export default function PostByTags() {
  let { tags } = useParams();
  let dataResFilterByTags = useFetchDataByTags();
  const [dataRes, setDataRes] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/tagfromusers?filters[slug]=${tags}`)
      .then((res) => {
        setDataRes(res.data.data);
      });
  }, [tags]);

  return (
    <div>
      {dataRes.map((item) => (
        <div key={item.id}>
          <Flex
            align="top"
            justify="left"
            direction="column"
            bg={"white"}
            height="auto"
            width={"100%"}
            borderRadius="lg"
            boxShadow="lg"
            p={4}
            mt={8}
            borderTop={`10px solid`}
            borderColor={item.attributes.color}
          >
            <Heading as="h1" size="xl" noOfLines={1} py={3}>
              {item.attributes.name}
            </Heading>
            <Text pb={5}>{item.attributes.description}</Text>
          </Flex>
        </div>
      ))}

      {dataResFilterByTags.length === 0 ? (
  
<Center mt={20}>
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
          />
          </Center>
    
      ) : (
        dataResFilterByTags.map((link) => (
          <Stack
            key={link.id}
            w={"full"}
            bg={"white"}
            // boxShadow={"xl"}
            rounded={"md"}
            overflow={"hidden"}
            mt={6}
            border={"1px"}
            borderColor={"gray.200"}
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
            <Stack
              direction={"column"}
              spacing={0}
              p={4}
            >
            <Heading as="h2" size="lg">{link.attributes.name}</Heading>
            <Text>{link.id}</Text>
            <Text mt={4}>{link.attributes.url}</Text>
            <Text>{link.attributes.type}</Text>

            <Text>
              {link.attributes.tagfromusers.data.map((tags) => {
                return (
                  <Tag
                  mr={2}
                    my={5}
                    px={2}
                    py={1}
                    bg={tags.attributes.color}
                    color="white"
                    border="1px"
                    borderColor="transparent"
                    _hover={{
                      bg: tags.attributes.color,
                      color: "white",
                      opacity: 1,
                    }}
                  >
                    <Link to={`/t/${tags.attributes.slug}`}>
                      #{tags.attributes.name}
                    </Link>
                  </Tag>
                );
              })}
            </Text>
          </Stack>
          </Stack>
        ))
      )}
    </div>
  );
}
