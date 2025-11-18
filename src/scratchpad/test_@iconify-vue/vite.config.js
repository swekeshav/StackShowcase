import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: [
      '@iconify-json/mdi',
      '@iconify-json/fa',
      '@iconify-json/bi',
      '@iconify-json/heroicons',
      '@iconify-json/material-symbols',
      '@iconify-json/carbon',
      '@iconify-json/tabler'
    ]
  }
})