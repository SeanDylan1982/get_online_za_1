import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // or your subpath if using one
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "motion-utils": path.resolve(__dirname, "node_modules/motion-utils/dist/cjs/index.js"),
      "@floating-ui/core": path.resolve(__dirname, "node_modules/@floating-ui/core/dist/floating-ui.core.esm.js"),
      "@floating-ui/dom": path.resolve(__dirname, "node_modules/@floating-ui/dom/dist/floating-ui.dom.esm.js"),
      "@react-stately/utils": path.resolve(__dirname, "node_modules/@react-stately/utils/dist/main.js"),
      "@react-aria/ssr": path.resolve(__dirname, "node_modules/@react-aria/ssr/dist/main.js"),
    },
  },
});
