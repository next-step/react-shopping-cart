import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
const plugins = [react(), TanStackRouterVite()];

export default defineConfig({
  plugins: plugins,
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@/components', replacement: '/src/components' },
    ],
  },
});
