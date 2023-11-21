import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const cookieValue = getCookie();

    const fetchData = async () => {
      try {
        const response = await axios.post(`${rota}/inf_user.php`, cookieValue);

        if (response.data && response.data.length > 0) {
          const firstUser = response.data[0];
          setUser({
            email: firstUser.email,
            senha: firstUser.senha,
          });
          console.log('user (inside useEffect):', {
            email: firstUser.email,
            senha: firstUser.senha,
          });
        }
      } catch (err) {
        console.log(`ERROR: ${err}`);
      }
    };

    if (cookieValue) {
      fetchData();
    }
  }, []);

  const signin = async (email, senha) => {
    console.log('Enviando: ', email, senha);
    axios
      .post(`${rota}/login.php`, JSON.stringify({ email, senha }), {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log('Resposta do servidor: ', response);

        if (response.data && response.data === true) {
          console.log('passou_ line: 59');
          const usersStorage =
            JSON.parse(localStorage.getItem('users_bd')) || [];
          console.log('usersStorage:', usersStorage);

          const hasUser = usersStorage.filter((user) => user.email === email);
          console.log('hasUser:', hasUser);

          const token = Math.random().toString(36).substring(2);
          setUser({ email, senha }); // Atualiza o estado com os dados do usuário
          localStorage.setItem('user_token', JSON.stringify({ email, token }));
          console.log(`USER: ${user}`);
          return true;
        } else {
          console.log('Usuario não cadastrado');
          return 'Usuario não cadastrado';
        }
      })
      .catch((error) => {
        console.log('Erro ao comunicar com o servidor', error);
        return 'Erro ao comunicar com o servidor';
      });
  };

  const signup = (nome, email, senha) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_bd'));

    const hasUser = usersStorage?.filter((user) => user.email === email);
    console.log('auth_ line: 87');

    if (hasUser?.length) {
      return 'Já tem uma conta com esse E-mail';
    }

    let newUser;

    if (usersStorage) {
      console.log('auth_ line: 95');
      newUser = [...usersStorage, { nome, email, senha }];
    } else {
      newUser = [{ nome, email, senha }];
    }

    const dataJson = JSON.stringify({ nome, email, senha });
    console.log('auth_ line: 103');
    axios
      .post(`${rota}/Cadastro.php`, dataJson)
      .then((response) => console.log('Resposta do servidor: ', response.data))
      .catch((err) => console.log('Erro ao enviar dados: ', err));

    localStorage.setItem('users_bd', JSON.stringify(newUser));
    console.log('signup_ line: 108');
    return;
  };

  const getCookie = () => {
    const name = 'PHPSESSID';
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  var rota = '/Github/server';

  const signout = () => {
    setUser(null);
    document.cookie = 'PHPSESSID=';
    localStorage.removeItem('user_token');
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout, getCookie, rota }}
    >
      {children}
    </AuthContext.Provider>
  );
};
