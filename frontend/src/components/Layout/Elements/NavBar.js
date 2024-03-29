import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsHeartFill } from "react-icons/bs";
import { Link as ReachLink } from "react-router-dom";
import SearchBar from "./SearchBar";

// const Links = ["Dashboard", "Projects", "Team"];

const Links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  {name:"addlink", path: "/addlink"},
];

const NavLink = () => (
  Links.map((link) => (
    <Link as={ReachLink} key={link.name} to={link.path}>
      {link.name}
    </Link>
  ))
);

export default function NavBar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.900")} pr={5}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              fontWeight={"extrabold"}
              color={"white"}
              bg={"black"}
              px={4}
              py={2}
              rounded={"md"}
            >
              <Link as={ReachLink} to="/" _hover={{ textDecoration: "none" }}>
                <Flex>
                  I <BsHeartFill className="heartIcon" /> Share
                </Flex>
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <SearchBar />

                <NavLink />

            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={5}>{children}</Box>
    </>
  );
}
