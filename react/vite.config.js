import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/ // * docs on vite config files
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({ lintOnStart: true, failOnError: mode === "production" }),
  ],
  server: { open: true },
}));
