import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home";
import Training from "./pages/training";
import Header from "./components/Header";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme.js";
import { GlobalStyle } from "./style";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<Training />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
