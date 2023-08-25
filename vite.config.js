/**
 * @Author: Your name
 * @Date:   2023-08-25 13:54:30
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-08-25 13:57:05
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "base/main",
  plugins: [react()],
})
