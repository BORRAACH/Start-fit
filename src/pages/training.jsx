import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import SetExercisesTables from '../components/SetExercisesTables';
import Skeleton from '../components/Skeleton';
import { useInView } from 'framer-motion';
import AddExercicios from '../components/addExercicios';
import StackedWavesDark from '../assets/img/layered-waves-haikei-gray-purple.svg';
import StackedWavesLight from '../assets/img/layered-waves-haikei-orange-yellow.svg';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const DetailsOfDrils = ({ bg, users }) => {
  const bgBoxComponents = useColorModeValue('whiteAlpha.700', 'whiteAlpha.500');

  const { getCookie } = useAuth();
  const [id, setId] = useState();

  useEffect(() => {
    console.log(getCookie('PHPSESSID'));
  }, []);

  return (
    <Grid
      as={motion.div}
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 10, opacity: 0 }}
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

const Training = () => {
  const [users, setUsers] = useState();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const bgBoxComponents = useColorModeValue('whiteAlpha.700', 'whiteAlpha.500');

  useEffect(() => {
    // Realiza uma requisição para obter dados do servidor
    fetch('http://localhost/Github/server/data_response.php')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    <Box
      as={motion.div}
      minH={'200vh'}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      backgroundSize={'cover'}
      backgroundImage={useColorModeValue(StackedWavesLight, StackedWavesDark)}
      backgroundRepeat={'no-repeat'}
      ref={ref}
    >
      <Grid
        templateRows="repeat(1, 3fr)"
        templateColumns="repeat(4, 3fr)"
        gap={4}
        p={10}
        minH="70vh"
        maxH="90vh"
      >
        <GridItem borderRadius={10} colSpan={1}>
          <Box
            minH="100%"
            w="100%"
            position="sticky"
            top={20}
            boxShadow="2xl"
            borderRadius={10}
            backdropFilter={'blur(30px)'}
            bg={bgBoxComponents}
          ></Box>
        </GridItem>
        <GridItem
          p={4}
          borderRadius={10}
          colSpan={3}
          backdropFilter={'blur(30px)'}
          bg={bgBoxComponents}
          overflowY="scroll"
          boxShadow="2xl"
          css={{
            '&::-webkit-scrollbar': {
              width: 10,
              borderRadius: 10,
            },
            '&::-webkit-scrollbar-track': {
              width: 2,
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: 10,
              width: 5,
              background: '#fff',
            },
          }}
        >
          <Flex alignItems="start" flexDirection="column">
            <SetExercisesTables />
          </Flex>
        </GridItem>
      </Grid>
      {isInView && (
        <AnimatePresence>
          <DetailsOfDrils bg={bgBoxComponents} users={users} />
        </AnimatePresence>
      )}
    </Box>
  );
};

export default Training;
