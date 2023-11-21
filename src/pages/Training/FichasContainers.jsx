import React from 'react';
import {
  Container,
  Text,
  Flex,
  Button,
  Icon,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import useContextExercises from '../../hooks/useContextExercises';

const FichaContainer = ({ nomeFicha, onDelete }) => {
  return (
    <Container
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
          <Text fontSize="xl">{nomeFicha}</Text>
        </Tooltip>
        <Button
          colorScheme="red"
          boxShadow={'md'}
          opacity={0.8}
          onClick={onDelete}
        >
          <Icon as={DeleteIcon}></Icon>
        </Button>
      </Flex>
    </Container>
  );
};

export default FichaContainer;
