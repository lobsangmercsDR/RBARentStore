import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/RBARentStore/', // Nombre EXACTO del repositorio en GitHub
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Asegurar que los archivos van a /assets/
    emptyOutDir: true, // Borra dist antes de cada build
  },
});
