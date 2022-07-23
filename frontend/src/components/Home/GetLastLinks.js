import React, { useEffect, useState } from "react";
import { useFetchData } from "../../Services/Hooks/useFetchData";
import {
  Flex,
  Tag,
  Stack,
  Text,
  Button,
  ButtonGroup,
  Spacer,
  Heading,
  Wrap,
  WrapItem,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

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
    `${backendUrl}/api/links?populate=*&pagination[pageSize]=${nbArticles}&pagination[page]=${page}`
  );

  // Function to change number of articles per page
  useEffect(() => {
    if (!isLoading) {
      function getPagination() {
        setPageCountMax(lastLinks.meta.pagination.pageCount);
      }
      getPagination();
    }
  }, [lastLinks, isLoading]);

  //counter for pagination "next page"
  const handleNext = () => {
    if (page < pageCountMax) {
      setPage(page + 1);
    }
  };

  //counter for pagination "previous page"
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // value for keys of tags
  const randomNumberForKey = Math.floor(Math.random(0, 1) * 5000);

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
        lastLinks.data.map((link) => {
          return (
            <Stack
              key={link.id}
              background={"white"}
              p={5}
              mt={5}
              borderRadius={10}
              borderColor="gray.200"
              borderWidth="1px"
            >
              <Wrap>
                <WrapItem>
                  <Avatar size='sm' name="Nicolas" src="https://bit.ly/dan-abramov" />
       
                  <Stack direction='column' ml={2} mt={0} p={0}>
                  <Text fontSize="xs" fontWeight="bold"> Name Surname</Text>
                  <Text fontSize="xs" mt={0}> 22/07/2022</Text>
                  </Stack>
                </WrapItem>
              </Wrap>
              <Stack pl={10}>

              <Heading as="h1" size="xl">
              <h1>{link.attributes.name}</h1>
              </Heading>
              <Text mt={4}>{link.attributes.url}</Text>
              <p>

              {link.attributes.tag.map((tag) => {
                return (      
                  <Tag mr={2} mt={5} px={2} py={1} colorScheme="white" color="teal.900" border="1px" borderColor="transparent" _hover={{ bg: "gray.50", borderColor:"gray.600"}}>
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
