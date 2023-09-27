import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home';
import Training from './pages/training';
import Header from './components/Header.jsx';
import Create from './pages/Create';
import Login from './pages/login';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './libs/theme';
import { GlobalStyle } from './style';

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
