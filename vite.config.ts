import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import ViteImages from 'vite-plugin-vue-images';

export default defineConfig({
  assetsInclude: /\.(pdf|jpg|png|svg)$/,
  plugins: [
    Vue(),
    Components({
      dirs: ['src/components'],
    }),
    ViteImages(),
  ],
});
