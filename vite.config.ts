import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: (process as any).env.VERCEL ? "/" : "/verifact/",
})
