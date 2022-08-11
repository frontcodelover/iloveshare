import {
  Box,
  Text,
  Heading,
  Stack,
  Container,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";



export default function gridListWithCTA() {
  return (
    <Box
      p={10}
      bg={"white"}
      mt={"4"}
      mb={"4"}
      border={"1px"}
      rounded={"xl"}
      borderColor={"gray.200"}
    >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>La veille des devs francophones ✌️</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Découvrez les dernières actus devs de la communauté.
        </Text>
      </Stack>
    </Box>
  );
}
