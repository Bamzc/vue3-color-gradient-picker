// import { fileURLToPath, URL } from 'node:url'
const path = require('path');

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [{ find: /^@\//, replacement: path.resolve(__dirname, 'src') + '/' }],
    extensions: ['.ts', '.tsx', '.js', '.mjs', '.vue', '.json', '.less', '.css'],
  },
  build: {
    lib: {
      format: ['cjs', 'es'],
      // Could also be a dictionary or array of multiple entry pointsn
      entry: path.resolve(__dirname, 'src/lib/index.js'),
      name: 'cb-vue-color-gradient-picker',
      // the proper extensions will be added
      fileName: 'index.js',
      dir: 'dist',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'sass'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
