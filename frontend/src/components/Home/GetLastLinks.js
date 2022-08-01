import React, { useEffect, useState } from "react";
import { useFetchData } from "../../Services/Hooks/useFetchData";
import useFetchDataForUser from "../../Services/Hooks/useFetchDataForUser";
import {

  Tag,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Avatar,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TitleBase from "../Design/TitleBase";
import {
  allLinks,
  allUsersCall,
  populateAll,
} from "../../Services/ApiCalls/AllApiCalls";
import Pagination from "../Design/Pagination";
import SinglePostLike from "../Post/SinglePostLike";

const backendUrl = process.env.REACT_APP_API_URL;

export default function GetLastLinks() {
  const [pageCountMax, setPageCountMax] = useState(0);
  const [nbArticles, setNbArticles] = useState(5);
  const [page, setPage] = useState(1);

  const {
    data: lastLinks,
    isLoading,
    error,
  } = useFetchData(
    `${allLinks}${populateAll}&pagination[pageSize]=${nbArticles}&pagination[page]=${page}&sort=createdAt:desc`
  );

  const userIdForPost = lastLinks?.data?.map((link) => link.attributes.userid);

  const { userInfos } = useFetchDataForUser(`${allUsersCall}${populateAll}`);

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
    <>
      <Pagination
        page={page}
        pageCountMax={pageCountMax}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
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
                  <ButtonGroup float={'right'} mt={4}>
                  <SinglePostLike />
                  <Button colorScheme="gray" mr={10} size='md' >Save</Button>
                  </ButtonGroup>
                </p>
                
              </Stack>
            </Stack>
          );
        })
      )}
      {error && <p>{error}</p>}
    </>
  );
}
