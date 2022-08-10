import React from 'react';
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,

} from 'react-icons/fi';
import { Link as ReachLink } from "react-router-dom";



const LinkItems = [
  { name: "Accueil", icon: FiHome, url: "/", color: "gray.900" },
  {
    name: "Tendances",
    icon: FiTrendingUp,
    url: "/trending",
    color: "gray.900",
  },
  { name: "Tags", icon: FiCompass, url: "/tags", color: "gray.900" },
  { name: "Favoris", icon: FiStar, url: "/favourites", color: "gray.900" },
  { name: "Profil", icon: FiSettings, url: "/dashboard/", color: "gray.900" },
];

export default function SidebarLeft({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (

    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'none', lg: 'block' }}
      />
        {/* <SidebarRight /> */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      {/* <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} /> */}

    </Box>

  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <>
    <Box
      
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.100', 'gray.700')}
      w={'auto'}
      h="auto"
      mt={8}
      py={4}
      rounded="xl"
      border={'1px'}
      borderColor={'gray.200'}
      
      {...rest}>

      {LinkItems.map((link) => (
        
        <NavItem key={link.name} icon={link.icon}>
          <Link as={ReachLink} to={link.url}>
          {link.name}
        </Link>
        </NavItem>
      ))}
    </Box>

      </>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}

        {children}

      </Flex>
      
    </Link>
  );
};




// const MobileNav = ({ onOpen, ...rest }) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent="flex-start"
//       {...rest}>
//       <IconButton
//         variant="outline"
//         onClick={onOpen}
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//         Logo
//       </Text>
//     </Flex>
//   );
// };