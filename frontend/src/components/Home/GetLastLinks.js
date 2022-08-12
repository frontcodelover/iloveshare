import React, { useEffect, useState } from "react";
import { useFetchData } from "../../Services/Hooks/useFetchData";
import useFetchDataForUser from "../../Services/Hooks/useFetchDataForUser";
import {
  Tag,
  Stack,
  Text,
  Avatar,
  Image,
  ButtonGroup,
  Flex,
  Spacer,
  Box,
  Heading,
  Spinner,
  Skeleton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  allLinks,
  allUsersCall,
  populateAll,
} from "../../Services/ApiCalls/AllApiCalls";
import Pagination from "../Design/Pagination";
import SinglePostLike from "../Post/SinglePostLike";
import SinglePostSave from "../Post/SinglePostSave";
import { useSelector } from "react-redux";
import NumberOfComments from "../Design/NumberOfComments";
import axios from "axios";

const backendUrl = process.env.REACT_APP_API_URL;

export default function GetLastLinks() {
  const currentUser = useSelector((state) => state.user);
  const [nbArticles, setNbArticles] = useState(5);
  const [page, setPage] = useState(1);
  const [lastLinks, setLastLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const userId = localStorage.getItem("id");

  useEffect(() => {
    fetch(
      `${allLinks}${populateAll}&pagination[pageSize]=${nbArticles}&pagination[page]=${page}&sort=createdAt:desc&userId=${userId}`
    )
      .then((res) => res.json())
      .then((json) => setLastLinks([...lastLinks, ...json.data]));
    setIsLoading(false);
  }, [page, nbArticles, userId]);

  const scrollToEnd = () => {
    setPage(page + 1);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  const { userInfos } = useFetchDataForUser(`${allUsersCall}${populateAll}`);

  function countTimeReading(sentence) {
    if (!isLoading) {
      const words = sentence.length;
      const wordsPerMinute = 230;
      const minutes = Math.ceil(words / wordsPerMinute);
      return minutes + " min de lecture";
    }
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        lastLinks?.map((link) => {
          return (
            <Skeleton isLoaded={!isLoading}>
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
                    // layout={'cover'}
                    // h={'auto'}
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
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  {userInfos.map((user) => {
                    if (user.id === link.attributes.userid) {
                      return (
                        <>
                          <Avatar
                            name={user?.username}
                            alt={user?.username}
                            src={backendUrl + user?.photo?.url}
                          />
                          <Stack
                            direction={"column"}
                            spacing={0}
                            fontSize={"sm"}
                          >
                            <Text fontWeight={600}>
                              <Link to={`/profile/${user.username}`}>
                                {user?.username}
                              </Link>
                            </Text>
                            <Text color={"gray.500"}>
                              {new Date(
                                link.attributes.createdAt
                              ).toLocaleDateString("fr-FR")}{" "}
                              {"- " + countTimeReading(link.attributes.body)}
                            </Text>
                          </Stack>
                          <Stack direction="column" ml={2} mt={0} p={0}></Stack>
                        </>
                      );
                    }
                  })}
                </Stack>

                {link.attributes.tag.map((tag) => {
                  return (
                    <Tag
                      mr={2}
                      my={5}
                      px={2}
                      py={1}
                      colorScheme="white"
                      color="teal.900"
                      border="1px"
                      borderColor="transparent"
                      _hover={{ bg: "gray.100", borderColor: "gray.300" }}
                    >
                      <Link to={`/t/${tag.name}`}>#{tag.name}</Link>
                    </Tag>
                  );
                })}
                <ButtonGroup float={"right"} mt={4} mr={10}></ButtonGroup>

                {link.attributes.tagfromusers?.data.map((tag) => {
                  return (
                    <Tag
                      mr={2}
                      my={5}
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

                <Flex>
                  <Box>
                    <SinglePostLike
                      userId={currentUser?.user?.id}
                      postId={link.id}
                      link={link}
                    />
                  </Box>
                  <Box>
                    <NumberOfComments postId={link.id} />
                  </Box>
                  <Spacer />
                  <Stack direction={"row"} float={"right"}>
                    <Box ml={2}>
                      <SinglePostSave
                        userId={currentUser?.user?.id}
                        postId={link.id}
                      />
                    </Box>
                  </Stack>
                </Flex>
              </Box>
            </Skeleton>
          );
        })
      )}
    </>
  );
}
