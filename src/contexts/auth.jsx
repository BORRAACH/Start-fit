import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem('user_token');
    const usersStorage = localStorage.getItem('users_bd');

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email,
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email, senha) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_bd'));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].senha === senha) {
        const token = Math.random().toString(36).substring(2);

        const dataJson = JSON.stringify({ email, senha });

        axios
          .post('http://localhost/Github/server/login.php', dataJson, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res) => {
            console.log('Resposta do servidor: ', res);
            if (res.data === true) {
              localStorage.setItem(
                'user_token',
                JSON.stringify({ email, token }),
              );
              setUser({ email, senha });
            } else {
              console.log('Email ou senha incorretos');
            }
          })
          .catch((err) => console.log('Error: ', err));

        return;
      } else {
        console.log('E-mail ou senha incorretos');
        return 'E-mail ou senha incorretos';
      }
    } else {
      console.log('Usuário não cadastrado');
      return 'Usuário não cadastrado';
    }
  };

  const signup = (nome, email, senha) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_bd'));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return 'Já tem uma conta com esse E-mail';
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { nome, email, senha }];
    } else {
      newUser = [{ nome, email, senha }];
    }

    const dataJson = JSON.stringify({ nome, email, senha });

    axios
      .post('http://localhost/Github/server/Cadastro.php', dataJson)
      .then((response) => console.log('Resposta do servidor: ', response.data))
      .catch((err) => console.log('Erro ao enviar dados: ', err));

    localStorage.setItem('users_bd', JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('user_token');
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
