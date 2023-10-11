import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SelectExercises = ({ isOpen, setIsOpen }) => {
  const displayInputBox = () => {
    if (isOpen) return 'block';
    return 'none';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        as={motion.div}
        position={'fixed'}
        bg={'blackAlpha.600'}
        h={'100vh'}
        w={'100vw'}
        top={'0'}
        right={'0'}
        zIndex={20}
        display={displayInputBox}
      >
        <Flex
          w={'100%'}
          h={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid
            borderRadius={10}
            bg={'gray.100'}
            h={'80%'}
            w={'80%'}
            templateColumns={'repeat(4, 1fr)'}
            templateRows={'repeat(1, 1fr)'}
          >
            <GridItem colSpan={1} bg={'gray.200'} p={5} borderRadius={10}>
              <Button colorScheme="red" onClick={() => setIsOpen(false)}>
                exit
              </Button>
            </GridItem>
            <GridItem colSpan={3} borderRadius={10}>
              <Box w={'100%'} bg={'gray.300'} h={'20%'}></Box>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </motion.div>
  );
};

export { SelectExercises };
