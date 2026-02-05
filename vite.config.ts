import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Ensure "public" folder is used for static assets
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    host: true
  }
});