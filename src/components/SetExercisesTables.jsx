import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useContextExercises from '../hooks/useContextExercises';
import axios from 'axios';

function SetExercisesTables() {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="blackAlpha.100"
      backdropFilter="auto"
      backdropInvert="5%"
      backdropBlur="10px"
    />
  );
  const bgContainers = useColorModeValue('white', 'blackAlpha.300');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState();
  const { getExercises } = useContextExercises();

  const [selectedExercises, setSelectedExercises] = useState([]);
  const bgExercBox = useColorModeValue('blackAlpha.50', 'whiteAlpha.100');

  const sendSelectedExercises = () => {
    axios
      .post(
        'http://localhost/Github/server/monta_tabela.php',
        selectedExercises,
      )
      .then((response) => {
        console.log('Dados enviados com sucesso!', response);
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
      });
  };

  useEffect(() => {
    if (isOpen) {
      axios
        .get('http://localhost/Github/server/get_exercicios.php')
        .then((res) => {
          const values = res.data;
          console.log(values);
          return values;
        })
        .then((values) => {
          const categorizedExercises = values.reduce((acc, exercicio) => {
            if (!acc[exercicio.categoria]) {
              acc[exercicio.categoria] = [];
            }
            acc[exercicio.categoria].push(exercicio);
            return acc;
          }, {});
          const textColor = () => useColorModeValue('gray.700', 'gray.200');

          const categories = Object.keys(categorizedExercises);
          const checkboxes = categories.map((categoria) => {
            const exercicios = categorizedExercises[categoria].map(
              (exercicio) => (
                <Flex
                  alignItems={'center'}
                  justifyContent={'center'}
                  key={exercicio.id_exercicio}
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
                    value={exercicio.nome_exercicio}
                    onChange={(e) => handleCheckboxChange(e, exercicio)}
                    fontWeight={'bold'}
                    color={textColor}
                  >
                    {exercicio.nome_exercicio}
                  </Checkbox>
                </Flex>
              ),
            );

            return (
              <Container
                key={categoria}
                bg={bgContainers}
                p={5}
                mt={10}
                w={'100%'}
                maxW={'100%'} // Adicione esta linha
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
                    background: '#ffffff29',
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
        })
        .catch((err) => console.error(err));
    }
  }, [isOpen]);

  const handleCheckboxChange = (e, exercicio) => {
    const { checked, value } = e.target;

    if (checked) {
      setSelectedExercises([...selectedExercises, exercicio]);
    } else {
      setSelectedExercises(
        selectedExercises.filter((item) => item.id_exercicio !== value),
      );
    }
  };

  return (
    <>
      <Button
        ml="4"
        bg={useColorModeValue('orange.400', 'purple.400')}
        color={'white'}
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
          getExercises();
        }}
      >
        Use Overlay two
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
              <Flex w={'100%'}> {overlay}</Flex>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button onClick={sendSelectedExercises} colorScheme="blue">
              Enviar
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SetExercisesTables;
