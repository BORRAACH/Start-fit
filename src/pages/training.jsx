// chakra-ui
import { Container, Button, Box, Text, Flex, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

import { useState } from 'react';

const Training = () => {
  const [boxes, setBoxes] = useState([]);

  const handleAddBox = () => {
    setBoxes([
      ...boxes,
      <Box key={boxes.length} borderRadius={10} bg={'gray.200'} p={10} m={10}>
        <Text>Hello World</Text>
      </Box>,
    ]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Container w={'100%'}>
        <Flex alignItems={'center'} flexDirection={'column'}>
          <Button
            bg={'none'}
            py={6}
            border={'1px solid #000'}
            h={8}
            gap={3.5}
            onClick={handleAddBox}
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
          <Container>{boxes.map((box) => box)}</Container>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Training;
