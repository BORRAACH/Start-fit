import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useContextExercises from '../../hooks/useContextExercises';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

function SetExercisesTables({
  isOpen,
  onOpen,
  onClose,
  setForceRender,
  forceRender,
}) {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="blackAlpha.100"
      backdropFilter="auto"
      backdropInvert="5%"
      backdropBlur="10px"
    />
  );
  const bgContainers = useColorModeValue('white', 'blackAlpha.300');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const { getCookie } = useAuth();
  const { getFichas } = useContextExercises();

  const [overlay, setOverlay] = useState();
  const [nomeFicha, setNomeFicha] = useState();
  const [fichas, setFichas] = useState();
  const [selectedExercises, setSelectedExercises] = useState([]);

  const bgExercBox = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');
  const scroll = useColorModeValue('RGBA(0, 0, 0, 0.16)', '#ffffff29');

  const loadExercises = async () => {
    try {
      const res = await axios.get(
        'http://localhost/Github/server/get_exercicios.php',
      );
      const values = res.data;

      const categorizedExercises = values.reduce((acc, exercicio) => {
        if (!acc[exercicio.categoria]) {
          acc[exercicio.categoria] = [];
        }
        acc[exercicio.categoria].push(exercicio);
        return acc;
      }, {});

      const categories = Object.keys(categorizedExercises);
      const checkboxes = categories.map((categoria) => {
        const exercicios = categorizedExercises[categoria].map((exercicio) => (
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            key={exercicio.id}
            position={'relative'}
            minW={'2xs'}
            minH={'2xs'}
            ml={10}
            boxShadow={'md'}
            borderRadius={5}
            bg={bgExercBox}
            p={5}
          >
            <Checkbox
              value={exercicio.id}
              onChange={(e) => handleCheckboxChange(e, exercicio)}
              fontWeight={'bold'}
              color={textColor}
            >
              {exercicio.nome}
            </Checkbox>
          </Flex>
        ));
        return (
          <Container
            key={categoria}
            bg={bgContainers}
            p={5}
            mt={10}
            w={'100%'}
            maxW={'100%'}
            minH={200}
            maxH={'auto'}
            boxShadow={'md'}
            borderRadius={5}
            overflowY={'hidden'}
            overflowX={'auto'}
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
                background: scroll,
              },
            }}
          >
            <Stack spacing={5}>
              <Text fontSize={'xl'}>{categoria}</Text>
              <Flex>{exercicios}</Flex>
            </Stack>
          </Container>
        );
      });

      setOverlay(<Box w={'100%'}>{checkboxes}</Box>);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadExercises();
    }
  }, [isOpen]);

  const handleCheckboxChange = (e, exercicio) => {
    const { checked, value } = e.target;

    setSelectedExercises((prevSelectedExercises) => {
      if (checked) {
        return [...prevSelectedExercises, exercicio];
      } else {
        return prevSelectedExercises.filter(
          (item) => item.id_exercicio !== value,
        );
      }
    });
  };

  // Dentro da função SetExercisesTables
  const sendSelectedExercises = async () => {
    try {
      const idUser = getCookie();

      // Adiciona a propriedade 'idUser' a cada exercício
      const exercisesWithIdUser = selectedExercises.map((exercicio) => ({
        ...exercicio,
        idUser: idUser,
        nomeFicha: nomeFicha,
      }));

      const response = await axios.post(
        'http://localhost/Github/server/monta_ficha.php',
        exercisesWithIdUser,
      );
      console.log('Dados enviados com sucesso!', response);
      console.log('exercicios enviados: ', exercisesWithIdUser);

      // Atualiza o estado para forçar a renderização
      setForceRender(!forceRender);
      setSelectedExercises([]);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <>
      <Button
        mt={10}
        bg={useColorModeValue('orange.400', 'purple.400')}
        color={'white'}
        onClick={() => {
          onOpen();
          loadExercises();
        }}
      >
        Montar Ficha
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent
          minW={'6xl'}
          h={'4xl'}
          bg={useColorModeValue('yellow.50', '#1d1d1d')}
        >
          <ModalHeader fontSize={'2xl'}>
            Select at exercises on the table
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={2}>
            <Container
              p={5}
              className="container"
              minW={'100%'}
              maxH={'2xl'}
              borderRadius={5}
              overflowY={'auto'}
              css={{
                '&::-webkit-scrollbar': {
                  width: 10,
                  borderRadius: 10,
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  borderRadius: 10,
                  width: 5,
                  background: '#ffffff29',
                },
              }}
            >
              <VStack spacing={10}>
                <FormControl>
                  <FormLabel fontWeight={600}>Workout name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Workout name: exmaple"
                    onChange={(e) => setNomeFicha(e.target.value)}
                  />
                </FormControl>
                <Flex w={'100%'}>{overlay}</Flex>
              </VStack>
            </Container>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={5}>
              <Button
                onClick={() => {
                  sendSelectedExercises();
                  onClose();
                }}
                colorScheme="blue"
              >
                Salvar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SetExercisesTables;
