import {
  Box,
  Flex,
  Text,
  CircularProgress,
  CircularProgressLabel,
  VStack,
} from '@chakra-ui/react';

const Routine = () => {
  return (
    <Box bg={'gray.100'} p={10} borderRadius={10} mt={10}>
      <VStack spacing={10}>
        <Text fontSize={'3xl'}>Training name</Text>
        <Text>Exercise 1, Exercise 2, Exercise 3...</Text>

        <Flex justifyContent={'space-between'}>
          <CircularProgress value={90} color="green.400">
            <CircularProgressLabel>90%</CircularProgressLabel>
          </CircularProgress>
          <CircularProgress value={90} color="green.400">
            <CircularProgressLabel>90%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Routine;
