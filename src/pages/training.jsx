import { useEffect, useRef, useState } from 'react';
import { Box, Text, Flex, Grid, GridItem } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import SetExercisesTables from '../components/SetExercisesTables';
import Skeleton from '../components/Skeleton';
import { useInView } from 'framer-motion';

const Training = () => {
  const [users, setUsers] = useState();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // Realiza uma requisição para obter dados do servidor
    fetch('http://localhost/Github/server/data_response.php')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, []);

  console.log('inView: ', isInView);
  return (
    <Box
      as={motion.div}
      minH={'200vh'}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: 0.3 }}
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
            boxShadow="lg"
            borderRadius={10}
            bg="gray.100"
          ></Box>
        </GridItem>
        <GridItem
          p={4}
          borderRadius={10}
          colSpan={3}
          bg="gray.100"
          overflowY="scroll"
          boxShadow="lg"
        >
          <Flex alignItems="start" flexDirection="column">
            <SetExercisesTables />
          </Flex>
        </GridItem>
      </Grid>
      {isInView && (
        <AnimatePresence>
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
              bg="gray.200"
            >
              <Text fontSize="xl">Usuários</Text>
              {users &&
                users.map((user, index) => (
                  <div key={index}>
                    <Text>{user.email}</Text>
                    <Text>{user.senha}</Text>
                  </div>
                ))}
            </GridItem>
            <GridItem
              colSpan={2}
              rowSpan={1}
              borderRadius={5}
              minH="100%"
              bg="gray.100"
            >
              <Skeleton />
            </GridItem>
            <GridItem
              colSpan={2}
              rowSpan={1}
              borderRadius={5}
              rowStart={2}
              bg="gray.100"
              minH="100%"
            >
              <Skeleton circle={true} />
            </GridItem>
            <GridItem
              colSpan={3}
              rowSpan={1}
              borderRadius={5}
              rowStart={2}
              bg="gray.200"
              minH="100%"
            >
              <Skeleton />
            </GridItem>
          </Grid>
        </AnimatePresence>
      )}
    </Box>
  );
};

export default Training;
