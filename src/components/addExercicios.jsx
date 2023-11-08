import { Button, FormControl, Input } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

const AddExercicios = function () {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost/Github/server/post_exercicios.php',
        `valorDoInput=${inputValue}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      console.log('Valor do input:', inputValue);
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error('Erro ao enviar a requisição:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <FormControl>
      <Input type="text" value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleSubmit}>Enviar</Button>
    </FormControl>
  );
};

export default AddExercicios;
