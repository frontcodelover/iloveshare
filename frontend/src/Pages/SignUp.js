import React, { useState, useEffect } from "react";
import LoginRedirect from "../components/User/LoginRedirect";
import LoginBtn from "../components/User/LoginBtn";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();

  const token = localStorage.getItem("jwt");

  console.log("token", token);
  useEffect(() => {
    if (token) {
      setTimeout(() => history(`/dashboard/`), 3000); // Redirect to homepage after 3 sec
    } else {
      setIsLoading(false);
    }
  }, [history, token]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Flex minH={"auto"} bg={"gray.50"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}>Connectez-vous</Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  et partagez et enregistrez vos meilleurs liens ✌️
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={"white"}
                boxShadow={"lg"}
                p={8}
                align={"center"}
                justify={"center"}
              >
                <Stack spacing={0}>
                  <Stack spacing={0}>
                    <LoginRedirect />
                    <LoginBtn />
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </>
      )}
    </>
  );
}
