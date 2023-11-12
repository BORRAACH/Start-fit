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
      bg="none"
      backdropFilter="auto"
      backdropInvert="5%"
      backdropBlur="2px"
    />
  );
  const bgBoxes = useColorModeValue('gray.50', 'blackAlpha.300');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState();
  const { getExercises } = useContextExercises();

  const [selectedExercises, setSelectedExercises] = useState([]);
  const bgExercBox = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');

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

          const categories = Object.keys(categorizedExercises);
          const checkboxes = categories.map((categoria) => {
            const exercicios = categorizedExercises[categoria].map(
              (exercicio) => (
                <Box
                  key={exercicio.id_exercicio}
                  h={150}
                  position={'relative'}
                  w={'md'}
                  ml={10}
                  borderRadius={5}
                  bg={bgExercBox}
                  p={10}
                >
                  <Checkbox
                    value={exercicio.nome_exercicio}
                    onChange={(e) => handleCheckboxChange(e, exercicio)}
                  >
                    {exercicio.nome_exercicio}
                  </Checkbox>
                </Box>
              ),
            );

            return (
              <Container
                key={categoria}
                bg={bgBoxes}
                p={5}
                mt={10}
                w={'100%'}
                maxW={'100%'} // Adicione esta linha
                minH={200}
                maxH={'xl'}
                borderRadius={5}
                overflowY={'hidden'}
                overflowX={'auto'}
                css={{
                  '&::-webkit-scrollbar': {
                    width: 10,
                    background: '#ffffff29',
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
                <Text fontSize={'xl'}>{categoria}</Text>
                <Flex>{exercicios}</Flex>
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
        colorScheme="blue"
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
        <ModalContent minW={'6xl'} h={'4xl'}>
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
                  background: '#ffffff29',
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
