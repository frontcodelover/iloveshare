import React, {useState} from "react";
import {
  chakra,
  Box,
  Stack,
  HStack,
  Text,
  Avatar,
  Divider,
  Flex,
  Button,
} from "@chakra-ui/react";
import useFetchDataForUser from "../../Services/Hooks/useFetchDataForUser";
import UserSocialNetwork from "../Design/UserSocialNetwork";
import { useParams } from "react-router-dom";
import {
  BsDiscord,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsLink,
} from "react-icons/bs";
import { allUsersCall, populateAll } from "../../Services/ApiCalls/AllApiCalls";

const backendUrl = process.env.REACT_APP_API_URL;

const UserRemuseCard = () => {
  const { username } = useParams();

  const [isFollowed, setIsFollowed] = useState(false);
  const [follow, setFollow] = useState("Suivre");

  const { userInfos } = useFetchDataForUser(
    `${allUsersCall}&filters[username][$eq]=${username}${populateAll}`
  );

  function handleFollow(e) {
    e.preventDefault();
    setIsFollowed(true);
    if (follow === "Suivre") {
      setFollow("Ne plus suivre");
    } else {
      setFollow("Suivre");
    }
  }

  return (
    <>
      {userInfos?.map((user) => (
        <Stack 
          p={4}
          borderRadius={10}
          borderColor="gray.200"
          borderWidth="1px"
          bg={"white"}
          spacing={4}
          mt={5}
        >
          <Flex direction="row" gap={4}>
          <HStack justifyContent="space-between" alignItems="baseline">
              <Box pos="relative">
                <Avatar
                  src={backendUrl + user.photo.url}
                  name={user.username}
                  size="md"
                  borderRadius="md"
                />
              </Box>
          </HStack>
          <chakra.h1 fontSize="xl" fontWeight="bold">
            {user.username}
          </chakra.h1>
          </Flex>
          <Button colorScheme="teal" onClick={handleFollow}>{follow}</Button>
          <Text fontSize="md" color="gray.500">
            {user?.bio}
          </Text>
          <Divider />
          <Text fontSize="md" color="gray.600">
            {user.website ? (
              <UserSocialNetwork linkUrl={user.website} iconName={BsLink} />
            ) : (
              ""
            )}
            {user.twitter ? (
              <UserSocialNetwork linkUrl={user.twitter} iconName={BsTwitter} />
            ) : (
              ""
            )}
            {user.instagram ? (
              <UserSocialNetwork linkUrl={user.instagram} iconName={BsInstagram} />
            ) : (
              ""
            )}
            {user.facebook ? (
               <UserSocialNetwork linkUrl={user.facebook} iconName={BsFacebook} />
            ) : (
              ""
            )}
            {user.github ? (
              <UserSocialNetwork linkUrl={user.github} iconName={BsGithub} />
            ) : (
              ""
            )}
            {user.linkedin ? (
              <UserSocialNetwork linkUrl={user.linkedin} iconName={BsLinkedin} />
            ) : (
              ""
            )}
            {user.discord ? (
               <UserSocialNetwork linkUrl={user.discord} iconName={BsDiscord} />
            ) : (
              ""
            )}
          </Text>
        </Stack>
      ))}
    </>
  );
};

export default UserRemuseCard;
