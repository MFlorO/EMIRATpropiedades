import { defineConfig } from 'vite'
// import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  }
})

