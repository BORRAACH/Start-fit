'use client';

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  useBreakpointValue,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];

const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -10, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="189" fill="#FF0066" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="250.5" cy="558.5" r="201.5" fill="#6600FF" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

export default function Signup() {
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);

  const { signup } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!nome | !email | !emailConfirm | !senha) {
      setError('Os campos devem ser preenchidos corretamente');
      toast({
        title: 'Erro de login',
        description: error,
        status: 'error',
        isClosable: true,
      });
      return;
    } else if (email !== emailConfirm) {
      setError('Os emails nao coincidem');
      toast({
        title: 'Erro de login',
        description: error,
        status: 'error',
        isClosable: true,
      });
      return;
    }

    const res = signup(nome, email, senha);

    if (res) {
      setError(res);
      toast({
        title: 'Erro de cadastro',
        description: res,
        status: 'error',
        isClosable: true,
      });
      console.log(' fodeu');
      return;
    }

    navigate('/training');
  };

  return (
    <Box
      position={'relative'}
      as={motion.div}
      minH={'100vh'}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 10, type: 'spring' }}
    >
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1, delay: 0.3, type: 'spring' }}
            >
              Experimente uma nova
            </motion.div>
            <Text bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              &
            </Text>{' '}
            <Text>Experiencia na criação de treinos</Text>
          </Heading>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Cadastre-se
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              Contamos com a sua contribuição para a contribuição de você e
              diversas outras pessoas para o funcionamento do projeto
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Firstname"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={(e) => [setNome(e.target.value), setError('')]}
              />
              <Input
                placeholder="firstname@lastname.io"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={(e) => [setEmail(e.target.value), setError('')]}
              />
              <Input
                placeholder="Confirm your email"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={(e) => {
                  setEmailConfirm(e.target.value);
                }}
              />
              <Input
                placeholder="Password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={(e) => [setSenha(e.target.value), setError('')]}
              />
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}
              onClick={handleSignup}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        zIndex={-100}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
  );
}
