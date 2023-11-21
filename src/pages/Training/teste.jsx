import { Box, Text } from '@chakra-ui/react';
import useContextExercises from '../../hooks/useContextExercises';

const Teste = () => {
  const { getFichas } = useContextExercises();
  const fichas = getFichas();

  const elements = () => {
    fichas.map((value) => {
      <Box key={value.length}>
        <Text>{value.name}</Text>
      </Box>;
    });
  };

  return <Box>{elements}</Box>;
};

export default Teste;
