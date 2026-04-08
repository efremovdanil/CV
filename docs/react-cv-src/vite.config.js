import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages: репозиторий `CV` деплоится по пути `/CV/`
  base: '/CV/',
  plugins: [react()],
})
