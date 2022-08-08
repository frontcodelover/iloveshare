import { VStack, Wrap, Text, Skeleton, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../Services/Hooks/useFetchData";
import TitleBase from "../Design/TitleBase";
import SinglePostLike from "./SinglePostLike";
import ReactMarkdown from "react-markdown";
import Emoji from "react-emoji-render";
import { allLinks, populateAll } from "../../Services/ApiCalls/AllApiCalls";
import EditSinglePost from "./EditSinglePost";
import { useSelector } from "react-redux";
import SinglePostSave from "./SinglePostSave";
import SinglePostComment from "./SinglePostComment";
import LikeTest from "./LikeTest";

const backendUrl = process.env.REACT_APP_API_URL;

export default function SinglePostContent() {
  const currentUser = useSelector((state) => state.user);

  const { slug } = useParams();
  const [bodyEmoji, setBodyEmoji] = useState("");

  const myWeirduserId = localStorage.getItem("id");

  const {
    data: singlePostData,
    isLoading,
    error,
  } = useFetchData(`${allLinks}filters[slug][$eq]=${slug}${populateAll}&userId=${myWeirduserId}`);

  useEffect(() => {
    if (!isLoading) {
      const emojified = singlePostData?.data[0]?.attributes?.body?.replace(
        /:(\w+):/g,
        "![:$1:](https://emojiapi.dev/api/v1/$1/32.png)"
      );
      setBodyEmoji(emojified);
    }
  }, [singlePostData, isLoading]);

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
                Posté le {new Date(link?.attributes?.createdAt).toLocaleDateString('fr-FR')} / Mis à  jour le {new Date(link?.attributes?.updatedAt).toLocaleDateString('fr-FR')}
              </Text>
              <EditSinglePost
                userid={link?.attributes?.userid}
                postid={link?.id}
              />
              <TitleBase title={link?.attributes?.name} />
              <Text>{link?.attributes?.url}</Text>
              <div className="markdown-body">
                <ReactMarkdown children={bodyEmoji} />
              </div>
              <SinglePostLike
                pr={0}
                userId={currentUser?.user?.id}
                postId={link.id}
                link={link}
              />
               <SinglePostSave
                     userId={currentUser?.user?.id}
                     postId={link.id}
              />
              <SinglePostComment
                postId={link.id}
                userId={currentUser?.user?.id}
              />
              <LikeTest
                  userId={currentUser?.user?.id}
                  postId={link.id}
                />
            </VStack>
          </Wrap>
        ))}
      </Skeleton>
    </>
  );
}
