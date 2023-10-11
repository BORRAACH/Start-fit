// chakra-ui
import {
  Container,
  Button,
  Box,
  Text,
  Flex,
  Input,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { SelectExercises } from '../components/SelectExercises';

const Training = () => {
  const [boxes, setBoxes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const handleCallInput = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const displayInputBox = () => {
    if (isOpen) return 'block';
    return 'none';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <SelectExercises isOpen={isOpen} setisOpen={setIsOpen} />
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
            minH="xl"
            w={'100%'}
            position={'sticky'}
            top={20}
            borderRadius={10}
            bg={'gray.300'}
          ></Box>
        </GridItem>
        <GridItem p={4} borderRadius={10} colSpan={3} bg={'gray.200'}>
          <Flex alignItems={'start'} flexDirection={'column'}>
            <Button
              bg={'none'}
              py={6}
              border={'1px solid #000'}
              h={8}
              gap={3.5}
              onClick={handleCallInput}
            >
              <AddIcon />
              <Text
                fontSize={'2xl'}
                fontWeight={'hairline'}
                paddingRight={6}
                fontFamily={'Inter, sans-serif'}
              >
                create a new training
              </Text>
            </Button>
            <Container>
              {boxes.map((box) => (
                <motion.div
                  key={boxes.length}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {box}
                </motion.div>
              ))}
            </Container>
          </Flex>
        </GridItem>
      </Grid>
    </motion.div>
  );
};

export default Training;
