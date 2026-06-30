import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      // Now pulling REAL services from your live Render DB
      '/api/v1/public': {
        target: 'https://cwms-backend-kyoe.onrender.com',
        changeOrigin: true,
      },
    },
  },
});