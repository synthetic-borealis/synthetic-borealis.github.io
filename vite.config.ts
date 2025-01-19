import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import Unfonts from 'unplugin-fonts/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(),
    Unfonts({
      google: { families: ['Roboto', 'Heebo'] },
    }),
  ],
});
