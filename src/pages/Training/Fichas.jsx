import { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Container,
  Flex,
  Button,
  Icon,
  useColorModeValue,
  Tooltip,
  useMediaQuery,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import useContextExercises from '../../hooks/useContextExercises';

const Workouts = ({ exercicios, forceRender }) => {
  const { deleteFicha } = useContextExercises();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (forceRender) {
      document.location.reload();
    }

    exercicios
      .then((resolvedData) => {
        if (Array.isArray(resolvedData)) {
          setData(resolvedData);
        } else {
          console.error(
            'Erro: exercicios não é um array válido:',
            resolvedData,
          );
        }
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, [exercicios, forceRender]);

  const exerciciosPorFicha = data.reduce((acc, exercicio) => {
    const { f_id, nome_ficha } = exercicio;

    if (!acc[f_id]) {
      acc[f_id] = { nome_ficha, exercicios: [] };
    }

    // Verifica se o exercício ainda não está na lista
    const exercicioExistente = acc[f_id].exercicios.find(
      (ex) => ex.nome === exercicio.nome,
    );

    if (!exercicioExistente) {
      acc[f_id].exercicios.push({ nome: exercicio.nome });
    }

    return acc;
  }, {});

  const containers = Object.keys(exerciciosPorFicha).map((f_id) => (
    <Container
      key={f_id}
      mb={5}
      p={10}
      borderRadius={5}
      minW={'container.sm'}
      boxShadow={'md'}
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
    >
      <Flex minW={'100%'} justifyContent={'space-between'}>
        <Tooltip
          hasArrow
          label="Nome da ficha"
          p={2}
          borderRadius={5}
          placement="top"
        >
          <Text fontSize="xl"> {exerciciosPorFicha[f_id].nome_ficha}</Text>
        </Tooltip>
        <Button
          colorScheme="red"
          boxShadow={'md'}
          opacity={0.8}
          onClick={() => {
            deleteFicha(f_id);
            document.location.reload();
          }}
        >
          <Icon as={DeleteIcon}></Icon>
        </Button>
      </Flex>
      {exerciciosPorFicha[f_id].exercicios.map((exercicio, index) => (
        <Box
          key={`${f_id}-${index}`}
          bg="blackAlpha.300"
          boxShadow={'sm'}
          p={3}
          borderRadius={5}
          mt={2}
        >
          <Text>{exercicio.nome}</Text>
        </Box>
      ))}
    </Container>
  ));

  return <>{containers}</>;
};

export default Workouts;
