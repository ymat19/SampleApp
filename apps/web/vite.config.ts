import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SampleApp/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
