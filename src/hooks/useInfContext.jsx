import { useContext } from 'react';
import { InfContext } from '../contexts/Informations';

const useInfContext = () => {
  const context = useContext(InfContext);
  return context;
};

export default useInfContext;
