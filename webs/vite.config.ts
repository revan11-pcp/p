import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.pcpexpress.com', // Updated target URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/local-api': {
        target: 'http://10.3.3.202:8087',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/local-api/, ''),
      },
    },
  },
})