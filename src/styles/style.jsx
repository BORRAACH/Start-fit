import { createGlobalStyle } from 'styled-components';
import { useColorModeValue } from '@chakra-ui/react';

const ScrollbarStyle = createGlobalStyle`
  body {
    &::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;
      margin-right: 10px;
    }

    &::-webkit-scrollbar-track {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      width: 5px;
      background: ${(props) => props.scrollbarColor};
    }
  }
`;

const GlobalStyled = () => {
  const scrollbarColor = useColorModeValue('#000000a3', '#ffffff29');

  return <ScrollbarStyle scrollbarColor={scrollbarColor} />;
};

export default GlobalStyled;
