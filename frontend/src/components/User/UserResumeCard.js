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
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import  useFetchDataForUser from '../../Services/Hooks/useFetchDataForUser';
// Here we have used react-icons package for the icons
import { AiFillGithub } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

const backendUrl = process.env.REACT_APP_API_URL;


const UserRemuseCard = () => {

  const {allUsers} = useSelector((state) => state.allUsers);
  
  const { id } = useParams();
  console.log(id)
  
  const { userInfos, isLoading, error } = useFetchDataForUser(
    `${backendUrl}/api/users?filters[id][$eq]=${id}`
  );
  console.log(userInfos)
    
  return (
    <Container maxW="5xl" p={{ base: 5, md: 6 }}>
 
        
      {userInfos?.map((link) => (
      
      <Stack
        w="17rem"
        spacing={2}
        p={4}
        border="1px solid"
        borderColor={'gray.400'}
        rounded="md"
        margin="0 auto"
        _hover={{
          boxShadow: 
            '0 4px 6px rgba(160, 174, 192, 0.6)'
          }}
          >
        <HStack justifyContent="space-between" alignItems="baseline">
          <Tooltip
            label="Lahore, Pakistan"
            aria-label="Lahore, Pakistan"
            placement="right-end"
            size="sm"
            // Sizes for Tooltip are not implemented in the default theme. You can extend the theme to implement them
            >
              
            <Box pos="relative">
            
             
            
  
              <Avatar
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
              name={link.username}
              size="xl"
              borderRadius="md"
              />
              
            </Box>
          </Tooltip>
         
           
         
        </HStack>
        <chakra.h1 fontSize="xl" fontWeight="bold">
        {link.username}
        </chakra.h1>
        <Text fontSize="md" color="gray.500">
          Software Engineer, Creator of TemplatesKart
        </Text>
        <Divider />
        <Text fontSize="md" color="gray.500">
          Sports lover ⚽️, exercise addict 🏋 and lifelong learner 👨🏻‍💻
        </Text>
      </Stack>
          ))}
    </Container>
      );
    };
    
    export default UserRemuseCard;