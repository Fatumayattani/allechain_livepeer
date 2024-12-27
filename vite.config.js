import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env, // Optional, if using in SSR mode
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://livepeer.studio',
        changeOrigin: true,
        secure: false, // Set to true if the API server supports HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite the API request path
      },
    },
  },
});


