import {
    Box,
    VStack,
    Button,
    Text,
    Heading,
    chakra,
    Stack,
    GridItem,
    Container,
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  

  const Feature = ({ heading, text }) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function gridListWithCTA() {
    return (
        <Box p={10} bg={'white'} mt={'4'} mb={'4'} border={'1px'} rounded={'xl'} borderColor={'gray.200'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Partagez vos meilleurs liens</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
                    Partagez, tagguez et publiez vos meilleurs liens pour vous constituer une veille
                    à votre image. Découvrez les derniers liens de la communauté.
          </Text>
        </Stack>
  
       
      </Box>
    );
  }