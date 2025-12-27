import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  css: {
    postcss: path.resolve(__dirname, "postcss.config.js"),
  },

  server: {
    port: 5173,
    open: true,
  },

  build: {
    outDir: "dist",       // ✅ WICHTIG: im Repo bleiben
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
