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
        main: "index.html",
        module: "src/main.tsx"
      }
    }
  }
})
