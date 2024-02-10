import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

const vapor = !process.env.NO_VAPOR

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
  define: {
    'import.meta.env.VAPOR': vapor,
  },
  plugins: [
    Vue({
      vapor,
    }),
  ],
})
