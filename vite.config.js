// vite.config.js
import React from '@vitejs/plugin-react-swc';

export default {
  plugins: [React()],
  server: {
    middleware: (app) => {
      app.use((req, res, next) => {
        // Configuração para permitir apenas a origem específica do seu frontend
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true'); // Adiciona essa linha
        next();
      });
    },
  },
};
