import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import * as SFCCompiler from 'vue/compiler-sfc'

export default defineConfig({
  plugins: [
    Vue({
      template: {
        // @ts-expect-error
        vapor: true,
      },
      compiler: SFCCompiler,
    }),
  ],
})
