import { createContext, useState } from 'react';
import axios from 'axios';

export const ContextExercises = createContext({});

export const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  const getExercises = () => {
    axios
      .get('http://localhost/Github/server/get_exercicios.php')
      .then((res) => console.log(res))
      .catch((err) => console.error(`Error: ${err}`));
  };

  return (
    <ContextExercises.Provider value={{ exercises, getExercises }}>
      {children}
    </ContextExercises.Provider>
  );
};
