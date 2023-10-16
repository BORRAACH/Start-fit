import { createContext, useState } from 'react';

export const ContextExercises = createContext({});

export const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  return (
    <ContextExercises.Provider value={{ exercises }}>
      {children}
    </ContextExercises.Provider>
  );
};
