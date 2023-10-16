import { useContext } from 'react';
import { ContextExercises } from '../contexts/contextExercises';

const useContextExercises = () => {
  const context = useContext(ContextExercises);
  return context;
};

export default useContextExercises;
