import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { CONFIG } from './src/config/constants';

export default defineConfig({
  plugins: [react()],
  server: {
    port: CONFIG.PORT,
    host: true, // This enables the server to be accessible from any IP
    strictPort: true, // This makes Vite fail if the port is already in use
  },
});