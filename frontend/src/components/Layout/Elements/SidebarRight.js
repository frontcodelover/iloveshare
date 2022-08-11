import React from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import {Link} from "react-router-dom";


const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function SidebarRight({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")}>
      <SidebarContent onClose={() => onClose} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.100", "gray.700")}
      w={{ base: "20%", md: 40, lg: 60 }}
      pos="fixed"
      h="auto"
      mt={8}
      p={6}
      rounded="xl"
      border={"1px"}
      borderColor={"gray.200"}
      display={{ base: "none", md: "block", lg: "block" }}
    >
      <Heading
        as="h2"
        fontSize={{ base: "24px", md: "15px", lg: "25px" }}
        fontWeight="bold"
        mt={4}
      >
        <Text color={"green.400"} fontWeight={"extrabold"}>
          I Love Share
        </Text>{" "}
        communauté de dévs francophones.
      </Heading>
      <Text mt={4}>
        Partagez vos meilleurs astuces et conseils sur le développement web et
        mobile.
        <Text mt={"4"}>
          Ajoutez les articles à vos favoris et suivez les tags.
        </Text>
      </Text>
      <Button mt={4} colorScheme={"green"}>
        <Link
          to="/signup"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Text fontWeight="bold" color={"white"}>
            Connexion
          </Text>
        </Link>
      </Button>
    </Box>
  );
};

// const NavItem = ({ icon, children, ...rest }) => {
//   return (
//     <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white',
//         }}
//         {...rest}>
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };
