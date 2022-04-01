import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [
    vue2({ jsx: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
