import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
plugins: [
tailwindcss(),
react()
],
base: "/sowdhanya-portfolio/", // ✅ must match your repo name exactly
server: {
port: 5179,
strictPort: false
}
})
