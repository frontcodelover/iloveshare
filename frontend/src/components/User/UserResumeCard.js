import React, { useEffect } from "react";
import {
  chakra,
  Box,
  Stack,
  HStack,
  Text,
  Container,
  Avatar,
  Tooltip,
  Divider,
  Icon,
  Link,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import useFetchDataForUser from "../../Services/Hooks/useFetchDataForUser";

import { Link as LinkReach, useParams } from "react-router-dom";
import {
  BsDiscord,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsLink,
} from "react-icons/bs";

const backendUrl = process.env.REACT_APP_API_URL;

const UserRemuseCard = () => {
  const { id } = useParams();

  const { userInfos } = useFetchDataForUser(
    `${backendUrl}/api/users?populate=*&filters[id][$eq]=${id}`
  );

  return (
    <Container maxW="5xl" p={{ base: 5, md: 6 }}>
      {userInfos?.map((user) => (
        <Stack
          w="33%"
          spacing={2}
          p={4}
          borderRadius={10}
          borderColor="gray.200"
          borderWidth="1px"
          margin="0 auto"
          bg={"white"}
        >
          <HStack justifyContent="space-between" alignItems="baseline">
            <Tooltip
              label="Lahore, Pakistan"
              aria-label="Lahore, Pakistan"
              placement="right-end"
              size="sm"
            >
              <Box pos="relative">
                <Avatar
                  src={backendUrl + user.photo.url}
                  name={user.username}
                  size="xl"
                  borderRadius="md"
                />
              </Box>
            </Tooltip>
          </HStack>
          <chakra.h1 fontSize="xl" fontWeight="bold">
            {user.username}
          </chakra.h1>
          <Text fontSize="md" color="gray.500">
            {user?.bio}
          </Text>
          <Divider />
          <Text fontSize="md" color="gray.600">
            {user.website ? (
              <Link href={user.website} pr={2}>
                <Icon as={BsLink}>{user.website}</Icon>
              </Link>
            ) : (
              ""
            )}
            {user.twitter ? (
              <Link href={user?.twitter} pr={2}>
                <Icon as={BsTwitter}></Icon>
              </Link>
            ) : (
              ""
            )}
            {user.instagram ? (
              <Link href={user?.instagram} pr={2}>
                <Icon as={BsInstagram}></Icon>
              </Link>
            ) : (
              ""
            )}
            {user.facebook ? (
              <Link href={user?.facebook} pr={2}>
                <Icon as={BsFacebook}></Icon>
              </Link>
            ) : (
              ""
            )}
            {user.github ? (
              <Link href={user?.github} pr={2}>
                <Icon as={BsGithub}></Icon>
              </Link>
            ) : (
              ""
            )}
            {user.linkedin ? (
              <Link href={user?.linkedin} pr={2}>
                <Icon as={BsLinkedin}></Icon>
              </Link>
            ) : (
              ""
            )}
            {user.discord ? (
              <Link href={user?.discord} pr={2}>
                <Icon as={BsDiscord}></Icon>
              </Link>
            ) : (
              ""
            )}
          </Text>
        </Stack>
      ))}
    </Container>
  );
};

export default UserRemuseCard;
