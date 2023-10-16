import {
  Alert,
  AlertIcon,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email | !emailConfirm | !password) {
      setError('Os campos devem ser preenchidos corretamente');
      return;
    } else if (email !== emailConfirm) {
      setError('Os emails nao coincidem');
      return;
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Container
        p={10}
        bg={'blackAlpha.900'}
        mt={10}
        top={'50%'}
        right={'36%'}
        borderRadius={10}
      >
        <FormControl>
          <Stack spacing={5}>
            <Text fontSize={'2xl'} color={'white'}>
              Signup
            </Text>
            <FormControl id="email">
              <FormLabel color={'white'}>Email</FormLabel>
              <Stack spacing={5}>
                <Input
                  placeholder="E-mail"
                  type="email"
                  id="emailSignup"
                  name="email"
                  value={email}
                  color={'white'}
                  onChange={(e) => [setEmail(e.target.value), setError('')]}
                />
                <Input
                  placeholder="Confirme seu e-mail"
                  type="email"
                  name="emailConfirm"
                  value={emailConfirm}
                  color={'white'}
                  onChange={(e) => [
                    setEmailConfirm(e.target.value),
                    setError(''),
                  ]}
                />
              </Stack>
            </FormControl>
            <FormControl id="password">
              <FormLabel color={'white'}>Password</FormLabel>
              <Input
                placeholder="Password"
                type="password"
                name="password"
                color={'white'}
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError('')]}
              />
              <FormLabel mt={5} color={'white'}>
                Já está registrado?{' '}
                <Link to={'/signin'}>
                  <Text color={'blue.300'}>Entrar</Text>
                </Link>
              </FormLabel>
            </FormControl>
            <Button type="submit" onClick={handleSignup}>
              Entrar
            </Button>
          </Stack>
        </FormControl>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
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
    </motion.div>
  );
};

export default Signup;
