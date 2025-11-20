import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/local-api': {
        target: 'http://10.3.3.202:8087',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/local-api/, ''),
      },
    },
  },
})