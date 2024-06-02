import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    minify: process.env.NO_MINIFY ? false : 'terser',
    terserOptions: {
      format: {
        comments: false,
      },
    },
    modulePreload: {
      polyfill: false,
    },
  },

  plugins: [Vue()],
})
