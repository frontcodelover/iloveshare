import { VStack, Wrap, Text, Skeleton, Image } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../Services/Hooks/useFetchData";
import TitleBase from "../Design/TitleBase";
import SinglePostLike from "./SinglePostLike";
import ReactMarkdown from "react-markdown";
import Emoji from 'react-emoji-render';

const backendUrl = process.env.REACT_APP_API_URL;

export default function SinglePostContent() {
  const { slug } = useParams();

  const {
    data: singlePostData,
    isLoading,
    error,
  } = useFetchData(
    `${backendUrl}/api/links?filters[slug][$eq]=${slug}&populate=*`
  );

  return (
    <>
      <Skeleton isLoaded={!isLoading}>
        {singlePostData?.data?.map((link) => (
          <Wrap
            key={link.id}
            bg="white"
            borderRadius={10}
            borderColor="gray.200"
            borderWidth="1px"
          >
            {link?.attributes?.featuredimg?.data?.attributes?.url ? (
              <Image
                src={
                  backendUrl +
                  link?.attributes?.featuredimg?.data?.attributes?.url
                }
                alt={link?.attributes?.name}
                width="100%"
                height="400px"
                objectFit={"cover"}
                p={0}
              />
            ) : (
              <></>
            )}

            <VStack spacing={4} align="stretch" px={20} py={5}>
              <Text fontSize="xs" mt={1}>
                Posted on {link?.attributes?.createdAt.split("T")[0]} / updated on{" "}
                {link?.attributes?.updatedAt?.split("T")[0]}
              </Text>
              <TitleBase title={link?.attributes?.name} />
              <Text>{link?.attributes?.url}</Text>
              <div className="markdown-body">
                <ReactMarkdown children={link?.attributes?.body} />
              </div>
              <SinglePostLike />
            </VStack>
          </Wrap>
        ))}
      </Skeleton>
    </>
  );
}
