import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/brito79.github.io/', // 👈 For GitHub Pages user site (brito79.github.io)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

