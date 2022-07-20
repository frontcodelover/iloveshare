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
} from "@chakra-ui/react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const backendUrl = process.env.REACT_APP_API_URL;

export default function GetLastLinks() {
  // State for pagination number from backend
  const [pageCountMax, setPageCountMax] = useState(0);

  // State of number articles per page
  const [nbArticles, setNbArticles] = useState(5);

  // State of current page
  const [page, setPage] = useState(1);

  // custom hook for fetching data from backend with pagination
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
          <Button onClick={handlePrevious}>
            <IoMdArrowDropleft />
            <Text>Previous</Text>
          </Button>

          <Button onClick={handleNext}>
            <Text>Next</Text>
            <IoMdArrowDropright />
          </Button>
        </ButtonGroup>
      </Flex>

      <input type="button" value="Next" onClick={handleNext} />
      <input type="button" value="Previous" onClick={handlePrevious} />
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
            >
              <h1>{link.attributes.name}</h1>
              <p>{link.id}</p>
              <Text mt={4}>{link.attributes.url}</Text>
              <p>

              {link.attributes.tag.map((tag) => {
                return (
                  
                    <Tag mr={2} mt={5}>
                      <Link to={`/t/${tag.name}`}>{tag.name}</Link>
                    </Tag>
                
                );
              })}
              </p>
            </Stack>
          );
        })
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
