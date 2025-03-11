import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/RBARentStore/', // Nombre exacto del repositorio en GitHub
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Coloca los archivos JS/CSS en /assets/
    emptyOutDir: true, // Borra dist antes de cada build
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
