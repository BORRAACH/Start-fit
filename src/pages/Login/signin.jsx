import {
  Container,
  Text,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);

  const { signin, signed } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email | !senha) {
      setError('Os campos devem ser preenchidos corretamente');
      console.log(error);
      return;
    }

    axios
      .get(
        `http://localhost/Github/server/login.php?email=${email}&senha=${senha}`,
      )
      .then((response) => {
        // Verifique a resposta do servidor
        console.log(response.data);

        // Você pode implementar uma lógica adicional aqui
        // Com base na resposta do servidor, como redirecionar o usuário

        if (response.data === 'Login bem-sucedido') {
          // Redirecione o usuário após o login bem-sucedido
          navigate('/');
        } else {
          setError('E-mail ou senha incorretos');
        }
      })
      .catch((error) => {
        console.error('Erro ao enviar requisição:', error);
      });

    const res = signin(email, senha);
    console.log(res);

    if (res) {
      setError(res);
      console.log(error);
      return;
    }

    console.log(signed);
    navigate('/');
    return;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Container
        p={10}
        bg={'blackAlpha.900'}
        mt={10}
        top={'50%'}
        right={'36%'}
        borderRadius={5}
      >
        <FormControl>
          <Stack spacing={5}>
            <Text fontSize={'2xl'} color={'white'}>
              Sigin
            </Text>
            <FormControl id="email">
              <FormLabel color={'white'}>Email</FormLabel>
              <Input
                placeholder="E-mail"
                type="email"
                name="email"
                value={email}
                color={'white'}
                onChange={(e) => [setEmail(e.target.value), setError('')]}
              />
            </FormControl>
            <FormControl id="senha">
              <FormLabel color={'white'}>senha</FormLabel>
              <Input
                placeholder="senha"
                type="senha"
                name="senha"
                color={'white'}
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError('')]}
              />
              <FormLabel mt={5} color={'white'}>
                Ainda nao esta registrado?{' '}
                <Link to={'/signup'}>
                  <Text color={'blue.400'}>Registre-se</Text>
                </Link>
              </FormLabel>
            </FormControl>
            <Button type="submit" onClick={handleLogin}>
              Submit
            </Button>
          </Stack>
        </FormControl>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <Alert status="error" mt={10} borderRadius={5}>
                <AlertIcon />
                {error}
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
      <Container>
        <AnimatePresence>
          {!email && (
            <Alert
              as={motion.div}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              borderRadius={5}
              mt={5}
            >
              <AlertIcon />
              <Text>
                O usuário deve estar logado para ter acesso ao sistema de
                criação de fichas
              </Text>
            </Alert>
          )}
        </AnimatePresence>
      </Container>
    </motion.div>
  );
};

export default Signin;
