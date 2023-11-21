import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import SetExercisesTables from './SetExercisesTables';
import { useInView } from 'framer-motion';
import StackedWavesDark from '../../assets/img/layered-waves-haikei-gray-purple.svg';
import StackedWavesLight from '../../assets/img/layered-waves-haikei-orange-yellow.svg';
import Workouts from './Fichas';
import useContextExercises from '../../hooks/useContextExercises';
import DetailsOfDrils from './DetailsOfDrils';
import Teste from './teste';
import useAuth from '../../hooks/useAuth';

const Training = () => {
  const [users, setUsers] = useState();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [exercicios, setExercicios] = useState();
  const [forceRender, setForceRender] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getFichas } = useContextExercises();
  const { rota } = useAuth();

  const bgBoxComponents = useColorModeValue('whiteAlpha.700', 'blackAlpha.700');

  useEffect(() => {
    // Realiza uma requisição para obter dados do servidor
    fetch(`${rota}/data_response.php`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, []);

  useEffect(() => {
    setExercicios(getFichas());
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
            boxShadow={useColorModeValue(
              '0 0 20px #00000023',
              '0 0 8px #ffffff24',
            )}
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
          boxShadow={useColorModeValue(
            '0 0 20px #00000023',
            '0 0 8px #ffffff24',
          )}
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
          <VStack spacing={10}>
            <SetExercisesTables
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              forceRender={forceRender}
              setForceRender={setForceRender}
            />
            <VStack
              minW={'100%'}
              align={'center'}
              bg={'whiteAlpha.100'}
              borderRadius={5}
              boxShadow={'md'}
              spacing={10}
              p={10}
            >
              <Center fontSize={'4xl'} fontWeight={500} minW={'md'}>
                Suas fichas
              </Center>

              {exercicios && (
                <Workouts
                  exercicios={exercicios}
                  isOpen={isOpen}
                  forceRender={forceRender}
                />
              )}
            </VStack>
          </VStack>
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
