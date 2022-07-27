import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link as ReachLink } from "react-router-dom";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import LogoutBtn from "../User/LogoutBtn";

const LinkItems = [
  { name: "Accueil", icon: FiHome, url: "/", color: "gray.900" },
  {
    name: "Tendances",
    icon: FiTrendingUp,
    url: "/trending",
    color: "gray.900",
  },
  { name: "Découvrir", icon: FiCompass, url: "/explore", color: "gray.900" },
  { name: "Favoris", icon: FiStar, url: "/favourites", color: "gray.900" },
  { name: "Profil", icon: FiSettings, url: "/dashboard/", color: "gray.900" },
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
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
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("gray.50", "gray.900")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link as={ReachLink} to="/">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            ILoveShare
          </Text>
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} color={link.color}>
          <Link as={ReachLink} to={link.url}>
            {" "}
            {link.name}
          </Link>
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, url, ...rest }) => {
  return (
    <Link style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { user } = useSelector((state) => state.user);
  const userId = localStorage.getItem("id");
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [user]);

  return (
    <>
      {user && isUser ? (
        <Flex
          ml={{ base: 0, md: 60 }}
          px={{ base: 4, md: 4 }}
          height="20"
          alignItems="center"
          justifyContent={{ base: "space-between", md: "flex-end" }}
          {...rest}
        >
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<FiMenu />}
          />
          <Link as={ReachLink} to="/">
            <Text
              display={{ base: "flex", md: "none" }}
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
            >
              ILoveShare
            </Text>
          </Link>

          <HStack spacing={{ base: "0", md: "6" }}>
            <IconButton
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<FiBell />}
            />
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                >
                  <HStack>
                    <Avatar
                      size={"sm"}
                      src={
                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      }
                    />
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm">{user.user.username}</Text>
                      <Text fontSize="xs" color="gray.600">
                        {user.user.email}
                      </Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem as={ReachLink} to={`dashboard/`}>
                    Profil
                  </MenuItem>
                  <MenuItem>Paramètres</MenuItem>

                  <MenuItem as={ReachLink} to={`/addlink`}>
                    Ajouter un article
                  </MenuItem>

                  <MenuDivider />
                  <MenuItem>
                    {" "}
                    <Text color={"red"}>
                      <LogoutBtn />
                    </Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>
      ) : (
        <Flex
          ml={{ base: 0, md: 60 }}
          px={{ base: 4, md: 4 }}
          height="20"
          alignItems="center"
          justifyContent={{ base: "space-between", md: "flex-end" }}
          {...rest}
        >
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<FiMenu />}
          />

          <Text
            display={{ base: "flex", md: "none" }}
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
          >
            ILoveShare
          </Text>

          <HStack spacing={{ base: "0", md: "6" }}>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                >
                  <HStack>
                    <Avatar
                      size={"sm"}
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                      }
                    />
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm">Non connecté</Text>
                      <Text fontSize="xs" color="gray.600">
                        anonyme
                      </Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem as={ReachLink} to={"/signup"}>
                    Login
                  </MenuItem>
                  <MenuItem as={ReachLink} to={"/signup"}>
                    Sign up
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>
      )}
    </>
  );
};
