/**
 * @Author: Your name
 * @Date:   2023-08-25 13:54:30
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-08-25 14:13:34
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/main",
  plugins: [react()],
})
