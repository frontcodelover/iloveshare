import React, { useEffect, useState } from "react";
import { useFetchData } from "../../Services/Hooks/useFetchData";
import useFetchDataForUser from "../../Services/Hooks/useFetchDataForUser";
import {
  Flex,
  Tag,
  Stack,
  Text,
  Button,
  ButtonGroup,
  Spacer,
  Wrap,
  WrapItem,
  Avatar,
  Image,
} from "@chakra-ui/react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TitleBase from "../Design/TitleBase";

const backendUrl = process.env.REACT_APP_API_URL;

export default function GetLastLinks() {
  const [pageCountMax, setPageCountMax] = useState(0);
  const [nbArticles, setNbArticles] = useState(5);
  const [page, setPage] = useState(1);

  const { allUsers } = useSelector((state) => state.allUsers);

  const {
    data: lastLinks,
    isLoading,
    error,
  } = useFetchData(
    `${backendUrl}/api/links?populate=*&pagination[pageSize]=${nbArticles}&pagination[page]=${page}`
  );



  const userIdForPost = lastLinks?.data?.map((link) => link.attributes.userid);



  const { userInfos } = useFetchDataForUser(
    `${backendUrl}/api/users/?populate=*`
  );

  useEffect(() => {
    if (!isLoading) {
      function getPagination() {
        setPageCountMax(lastLinks.meta.pagination.pageCount);
      }
      getPagination();
    }
  }, [lastLinks, isLoading]);

  const handleNext = () => {
    if (page < pageCountMax) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <Flex mt={5} gap="3" alignItems="right">
        <Spacer />
        <Text mt={2}>
          Page {page} / {pageCountMax}
        </Text>
        <ButtonGroup gap="2">
          <Button onClick={handlePrevious} colorScheme="teal" color="white">
            <IoMdArrowDropleft />
          </Button>

          <Button onClick={handleNext} colorScheme="teal" color="white">
            <IoMdArrowDropright />
          </Button>
        </ButtonGroup>
      </Flex>

      <input
        type="number"
        value={nbArticles}
        onChange={(e) => setNbArticles(e.target.value)}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        lastLinks?.data.map((link) => {
          return (
            <Stack
              key={link.id}
              background={"white"}
              mt={5}
              borderRadius={10}
              borderColor="gray.200"
              borderWidth="1px"
              pb={5}
            >
              <Wrap>
                {link?.attributes?.featuredimg?.data?.attributes?.url ? (
                  <Image
                    src={
                      backendUrl +
                      link?.attributes?.featuredimg?.data?.attributes?.url
                    }
                    alt="avatar"
                    maxH={300}
                    width="100%"
                    objectFit="cover"
                    roundedTop={10}
                  />
                ) : (
                  <Image />
                )}
                <WrapItem p={5}>
                  {userInfos.map((user) => {
                    if (user.id === link.attributes.userid) {
                      return (
                        <>
                          <Avatar
                            size="sm"
                            name={user?.username}
                            src={backendUrl + user?.photo?.url}
                          />

                          <Stack direction="column" ml={2} mt={0} p={0}>
                            <Link to={`/profile/${user.username}`}>
                              <Text fontSize="xs" fontWeight="bold">
                                {user?.username}
                              </Text>
                            </Link>

                            <Text fontSize="xs" mt={0}>
                              {link.attributes.createdAt.split("T")[0]}
                            </Text>
                          </Stack>
                        </>
                      );
                    }
                  })}
                </WrapItem>
              </Wrap>
              <Stack pl={10}>
                <Link to={`/post/${link?.attributes?.slug}`}>
                  <TitleBase
                    as="h2"
                    size="2xl"
                    fontWeight={"extrabold"}
                    title={link.attributes.name}
                  ></TitleBase>
                </Link>
                <Text mt={4}>{link.attributes.url}</Text>
                <p>
                  {link.attributes.tag.map((tag) => {
                    return (
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
                        <Link to={`/t/${tag.name}`}>#{tag.name}</Link>
                      </Tag>
                    );
                  })}
                </p>
              </Stack>
            </Stack>
          );
        })
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
