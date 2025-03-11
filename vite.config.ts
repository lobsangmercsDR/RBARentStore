import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/RBARentStore/', // Nombre del repositorio en GitHub
  build: {
    outDir: 'dist',
  },
});
