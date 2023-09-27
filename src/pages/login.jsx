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
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);
  const [formSubmited, setFormSubmited] = useState(false);

  const handleEmailChange = (e) => {
    const { value } = e.target;

    if (value === '' || value.includes('@')) {
      setEmailError(null);
      setFormData({
        ...formData,
        email: value,
      });
      console.log(formData);
    } else {
      setEmailError('Email inválido. Deve conter @');
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;

    if (value === '' || value.length < 8) {
      setPassError('A senha deve ter mais de 8 caracteres');
    } else {
      setPassError(null);
      setFormData({
        ...formData,
        password: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || passError) {
      return;
    }

    console.log(formData);
    setFormSubmited(true);
  };

  useEffect(() => {
    if (formSubmited) {
      console.log('Dados exportados com sucesso:', formData);
      setFormSubmited(false);
    }
  }, [formData, formSubmited]);

  const exportFormData = () => formData;

  const handleExport = () => {
    const exportedFormData = exportFormData();
    console.log('Dados exportados:', exportedFormData);
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
        {/* <Form method="post" action="/create" /*onSubmit={createAction}> */}
        <FormControl>
          <Stack spacing={5}>
            <Text fontSize={'2xl'} color={'white'}>
              Hello world
            </Text>
            <FormControl id="email">
              <FormLabel color={'white'}>Email</FormLabel>
              <Input
                placeholder="E-mail"
                type="email"
                name="email"
                color={'white'}
                onChange={handleEmailChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={'white'}>Password</FormLabel>
              <Input
                placeholder="Password"
                type="password"
                name="password"
                color={'white'}
                onChange={handlePasswordChange}
              />
            </FormControl>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </FormControl>
        {emailError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <Alert status="error" mt={10} borderRadius={5}>
              <AlertIcon />
              {emailError}
            </Alert>
          </motion.div>
        )}
        {passError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <Alert status="error" mt={10} borderRadius={5}>
              <AlertIcon />
              {passError}
            </Alert>
          </motion.div>
        )}
      </Container>
    </motion.div>
  );
};

export default Login;
export { formData, setFormData };
