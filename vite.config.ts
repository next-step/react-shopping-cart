import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
const plugins = [react()];
plugins.unshift(MillionLint.vite());
export default defineConfig({
  plugins: plugins,
  resolve: {
    alias: {
      '@': './src/*',
    },
  },
});
