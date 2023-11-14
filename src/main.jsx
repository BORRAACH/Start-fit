import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header.jsx';

import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';
import theme from './libs/theme';

import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth.jsx';
import { ExercisesProvider } from './contexts/contextExercises.jsx';
import SmallWithLogoLeft from './components/Footer/Footer.jsx';
import GlobalStyled from './styles/style.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyled />
      <CSSReset />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <AuthProvider>
        <ExercisesProvider>
          <BrowserRouter>
            <Header />
            <RoutesApp />
            <SmallWithLogoLeft />
          </BrowserRouter>
        </ExercisesProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
