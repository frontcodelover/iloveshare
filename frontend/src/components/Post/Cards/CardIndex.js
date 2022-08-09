import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image
} from '@chakra-ui/react';

export default function CardIndex() {
  return (
    
    
      <Box
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          // h={'auto'}
          maxH={'500px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            // layout={'cover'}
            // h={'auto'}
            maxH={'400px'}
            objectFit="cover"
            width="100%"
          />
        </Box>
        <Stack>
          <Heading
            color={'black'}
            fontSize={'2xl'}
            fontFamily={'body'}
            mt={4}>
            Boost your conversion rate
          </Heading>
          
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
        <Stack direction={'row'} float={'right'} mt={2} >
            <Text fontSize={'sm'}>1 commentaires</Text>
            <Text fontSize={'sm'}>1 up</Text>
          </Stack>
      </Box>

  );
}