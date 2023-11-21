import { createContext, useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { animateValue } from 'framer-motion';

export const ContextExercises = createContext({});

export const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const { getCookie, rota } = useAuth();

  const getFichas = () => {
    const cookie = getCookie();

    return axios
      .post(`${rota}/get_fichas.php`, cookie)
      .then((res) => {
        return res.data;
      })
      .catch((err) => `ERROR: ${err}`);
  };

  const deleteFicha = (id_ficha) => {
    console.log(id_ficha);
    axios
      .delete(`${rota}/delete_ficha.php/`, {
        params: {
          id: id_ficha, // ou o ID que você deseja excluir
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(`ERROR: ${err}`));
  };

  return (
    <ContextExercises.Provider value={{ exercises, getFichas, deleteFicha }}>
      {children}
    </ContextExercises.Provider>
  );
};
