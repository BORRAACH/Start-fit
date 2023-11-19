'use client';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import layerWavesDark from '../../assets/img/layered-waves-haikei.svg';
import LayerWavesLight from '../../assets/img/layered-waves-haikei-light-login.svg';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);

  const toast = useToast();
  const { signin, signed } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !senha) {
      setError('Os campos devem ser preenchidos corretamente');
      toast({
        title: 'Erro de login',
        description: 'Os campos devem ser preenchidos corretamente',
        status: 'error',
        isClosable: true,
      });
      return;
    }

    const res = await signin(email, senha);

    if (res !== true) {
      setError(res);
      console.error('erro', res);
      console.log('nao deu certo if (res !== true)');
      toast({
        title: 'Erro de login',
        description: res,
        colorScheme: 'red',
        status: 'error',
        isClosable: true,
      });
      return;
    }

    if (res) {
      console.log('sucesso');
      navigate('/training');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', duration: 0.5, delay: 0.3 }}
    >
      <Flex
        minH={'100vh'}
        align={'flex-start'}
        justify={'center'}
        backgroundSize={'cover'}
        backgroundImage={useColorModeValue(LayerWavesLight, layerWavesDark)}
        backgroundRepeat={'no-repeat'}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} fontFamily={'Ubuntu'}>
              Sign in to your account
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Text color={'blue.400'}>features</Text>{' '}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            minH={'md'}
            maxH={'xl'}
            minW={'md'}
            maxW={'xl'}
            bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
            boxShadow={'2xl'}
            p={10}
            css={{
              backdropFilter: 'blur(20px)',
            }}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => [setEmail(e.target.value), setError('')]}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="senha"
                  value={senha}
                  onChange={(e) => [setSenha(e.target.value), setError('')]}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link to={'/signup'}>
                    <Text color={'blue.400'}>Not registred ?</Text>
                  </Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleLogin}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </motion.div>
  );
}
