// chakra-ui
import { Button, Box, Text, Flex, Grid, GridItem } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import SetExercisesTables from '../components/SetExercisesTables';

const Training = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Grid
          templateRows={'repeat(1, 3fr)'}
          templateColumns={'repeat(4, 3fr)'}
          gap={4}
          p={10}
          minH={'70vh'}
          maxH={'90vh'}
        >
          <GridItem borderRadius={10} colSpan={1}>
            <Box
              minH="100%"
              w={'100%'}
              position={'sticky'}
              top={20}
              boxShadow={'lg'}
              borderRadius={10}
              bg={'gray.100'}
            ></Box>
          </GridItem>
          <GridItem
            p={4}
            borderRadius={10}
            colSpan={3}
            bg={'gray.100'}
            overflowY={'scroll'}
            boxShadow={'lg'}
          >
            <Flex alignItems={'start'} flexDirection={'column'}>
              <SetExercisesTables />
            </Flex>
          </GridItem>
        </Grid>
      </motion.div>
      <Grid
        templateRows={'repeat(2, 3fr)'}
        templateColumns={'repeat(5, 3fr)'}
        minH={'80vh'}
        p={10}
        gap={4}
      >
        <GridItem
          colSpan={3}
          rowSpan={1}
          borderRadius={5}
          minH={'100%'}
          bg={'gray.200'}
        >
          <Text fontSize={'xl'}>Usuarios</Text>
          {users &&
            users.map((user) => (
              <div key={user.id}>
                <Text>{user.email}</Text>
                <Text>{user.senha}</Text>
              </div>
            ))}
        </GridItem>
        <GridItem
          colSpan={2}
          rowSpan={1}
          borderRadius={5}
          minH={'100%'}
          bg={'gray.100'}
        ></GridItem>
        <GridItem
          colSpan={2}
          rowSpan={1}
          borderRadius={5}
          rowStart={2}
          bg={'gray.100'}
          minH={'100%'}
        ></GridItem>
        <GridItem
          colSpan={3}
          rowSpan={1}
          borderRadius={5}
          rowStart={2}
          bg={'gray.200'}
          minH={'100%'}
        ></GridItem>
      </Grid>
    </AnimatePresence>
  );
};

export default Training;
