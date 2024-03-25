import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {}
  },
  build : {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'nested/index.html')
      }
    }
  }
})
