import { defineConfig } from 'vite'
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
        main: "main.tsx",
      }
    }
  }
})
