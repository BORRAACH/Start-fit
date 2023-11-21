import {
  Box,
  Grid,
  GridItem,
  Skeleton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const DetailsOfDrils = ({ bg, users }) => {
  const bgBoxComponents = useColorModeValue('whiteAlpha.700', 'blackAlpha.500');

  const { getCookie } = useAuth();
  const [id, setId] = useState();

  useEffect(() => {
    console.log(getCookie('PHPSESSID'));
  }, []);

  return (
    <Grid
      transition={{ duration: 0.5, delay: 0.3 }}
      templateRows="repeat(2, 3fr)"
      templateColumns="repeat(5, 3fr)"
      minH="80vh"
      p={10}
      gap={4}
    >
      <GridItem
        colSpan={3}
        rowSpan={1}
        borderRadius={5}
        minH="100%"
        gap={5}
        p={10}
        boxShadow={'2xl'}
        backdropFilter={'blur(30px)'}
        bg={bgBoxComponents}
      >
        <Text fontSize="xl">Usuários</Text>
        {users &&
          users.map((user, index) => (
            <Box
              key={index}
              bg={'blackAlpha.50'}
              boxShadow={'md'}
              mt={5}
              p={5}
              borderRadius={5}
            >
              <Text>{user.email}</Text>
              <Text>{user.senha}</Text>
            </Box>
          ))}
      </GridItem>
      <GridItem
        colSpan={2}
        rowSpan={1}
        borderRadius={5}
        minH="100%"
        bg={bgBoxComponents}
        boxShadow={'2xl'}
        backdropFilter={'blur(30px)'}
      >
        {id}
      </GridItem>
      <GridItem
        colSpan={2}
        rowSpan={1}
        borderRadius={5}
        rowStart={2}
        bg={bgBoxComponents}
        boxShadow={'2xl'}
        backdropFilter={'blur(30px)'}
        minH="100%"
      >
        <Skeleton circle={true} />
      </GridItem>
      <GridItem
        colSpan={3}
        rowSpan={1}
        borderRadius={5}
        rowStart={2}
        boxShadow={'2xl'}
        bg={bgBoxComponents}
        minH="100%"
        backdropFilter={'blur(30px)'}
      >
        <Skeleton />
      </GridItem>
    </Grid>
  );
};

export default DetailsOfDrils;
