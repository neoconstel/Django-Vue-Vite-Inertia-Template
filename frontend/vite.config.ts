import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite' // <-----added for tailwindcss

import { resolve } from 'path' // <-----added for inertia integration

// https://vite.dev/config/
/**
 * added root, base, and build options for inertia integration <-----------
 * added publicDir to keep public directory in default location despite the
 * root option being changed from the default ('.') to './src'
 */
export default defineConfig({
  root: resolve('./src'),
  base: '/static/',
  plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss()],
  publicDir: resolve('./public'),
  build: {
    outDir: resolve('./dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    rollupOptions: {
      // Overwrite default .html entry to main.ts in the static directory
      input: resolve('./src/main.ts'),
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
