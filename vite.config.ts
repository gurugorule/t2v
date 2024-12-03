import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { CONFIG } from './src/config/constants';

export default defineConfig({
  plugins: [react()],
  server: {
    port: CONFIG.PORT,
    host: true,
    strictPort: true,
  },
  envDir: '.',
});