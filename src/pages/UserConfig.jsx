import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function UserConfig() {
  return (
    <Flex minH={'100vh'} p={10}>
      <Box
        minW={'xl'}
        minH={'2xl'}
        rounded={'lg'}
        position={'absolute'}
        bg={useColorModeValue('blackAlpha.300', 'whiteAlpha.300')}
      >
        <Box position="relative" padding="10">
          <Stack spacing={10}>
            <Heading
              fontFamily={'Ubuntu'}
              color={useColorModeValue('gray.800', 'whiteAlpha.700')}
            >
              Config
            </Heading>
            <Divider />
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}

export default UserConfig;
