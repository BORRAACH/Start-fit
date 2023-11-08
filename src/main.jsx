import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header.jsx';

import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';
import theme from './libs/theme';

import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth.jsx';
import { ExercisesProvider } from './contexts/contextExercises.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <AuthProvider>
        <ExercisesProvider>
          <BrowserRouter>
            <Header />
            <RoutesApp />
          </BrowserRouter>
        </ExercisesProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
