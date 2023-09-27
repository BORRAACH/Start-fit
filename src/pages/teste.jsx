import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Teste = () => {
  const [boxes, setBoxes] = useState([]);

  const handleClick = () => {
    setBoxes([
      ...boxes,
      <Box key={boxes.length}>
        <Text>Hello{boxes.length}</Text>
      </Box>,
    ]);
  };

  return (
    <Box bg={'gray.200'} p={10} borderRadius={10}>
      <Flex
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Button onClick={handleClick}>Create Text</Button>
        {boxes.map((box) => box)}
      </Flex>
    </Box>
  );
};

export default Teste;
