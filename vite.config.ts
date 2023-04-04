/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';
import nodePolyfills from 'rollup-plugin-polyfill-node';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), nodePolyfills()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    mockReset: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    exclude: [...configDefaults.exclude],
  },
});
