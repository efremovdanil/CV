import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths work both for a custom domain and a GitHub Pages project path.
  base: './',
  plugins: [react()],
})
