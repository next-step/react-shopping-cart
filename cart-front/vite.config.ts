/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import svgr from "vite-plugin-svgr";
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
    TanStackRouterVite(),
    viteReact(),
  ],

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
