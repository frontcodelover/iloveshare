import React, { useEffect, useState } from "react";
import LoginRedirect from "./LoginRedirect";
import LoginBtn from "./LoginBtn";
import CurrentUserAllLinks from "./CurrentUserAllLinks";
import { useSelector } from "react-redux";
import {
  Text,
  Avatar,
  Box,
  Badge,
  Flex,
  Heading,
  Wrap,
  Divider,
} from "@chakra-ui/react";
import LogoutBtn from "./LogoutBtn";
import useFetchDataForUser from "../../Services/Hooks/useFetchDataForUser";
import CardLink from "../Design/CardLink";

export default function Dashboard() {
  const { user } = useSelector((state) => state.user);
  const backendUrl = process.env.REACT_APP_API_URL;
  const [dataRes, setDataRes] = useState("{}");
  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch(`${backendUrl}/api/users/${user?.user.id || userId}?&populate=*`)
      .then((res) => res.json())
      .then((data) => setDataRes(data))
      .catch((err) => console.log(err));
  }, [backendUrl, user?.user.id, userId]);

  const { userInfos } = useFetchDataForUser(
    `${backendUrl}/api/links?filters[userid][$eq]=${user?.user.id || userId}`
  );

  return (
    <>
      {!token ? (
        <>
          <LoginRedirect />
          <LoginBtn />
        </>
      ) : (
        <>
          <Heading as="h1" fontSize="4xl">
            Tableau de bord
          </Heading>

          <Wrap
            spacing={4}
            bg={"white"}
            p={5}
            mt={5}
            borderRadius={10}
            borderColor="gray.200"
            borderWidth="1px"
          >
            <Flex>
              <Avatar src={backendUrl + dataRes?.photo?.url} />
              <Box ml="3">
                <Text fontWeight="bold">
                  {user?.user?.username || dataRes?.username}
                  <Badge ml="1" colorScheme="green" variant='outline' px={2}>
                    Vérifié
                  </Badge>
                </Text>
                <Text fontSize="sm">
                  Membre depuis le {dataRes?.createdAt?.split("T")[0]}
                </Text>
              </Box>
            </Flex>
            <Divider />
            <Heading as="h2" fontSize="2xl">Votre bio</Heading>
            
            <Text fontSize="sm">{user?.user?.bio || dataRes?.bio}</Text>
            <Divider />
            <LogoutBtn color={'red'} />
          </Wrap>

          <CurrentUserAllLinks />
          {userInfos?.data?.map((link) => (
            <CardLink
              avatar={backendUrl + dataRes?.photo?.url}
              linkid={link.id}
              createdAt={link.attributes.createdAt}
              name={link.attributes.name}
              tags={link.attributes.tags}
              url={link.attributes.url}
              userid={link.attributes.userid}
              userName={dataRes?.username}
            />
          ))}
        </>
      )}
    </>
  );
}
