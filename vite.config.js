import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './src/main.jsx',
    },
  },
  assetsInclude: ['**/*.svg'],
};
