import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import ViteImages from 'vite-plugin-vue-images';

export default defineConfig({
  assetsInclude: /\.(pdf|jpg|png|svg)$/,
  server: {
    port: 3005
  },
  plugins: [
    Vue(),
    Components({
      dirs: ['src/components'],
    }),
    ViteImages(),
  ],
});
