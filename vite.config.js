import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  based: "/FCC-markdown-preview",
  plugins: [react()],
})
