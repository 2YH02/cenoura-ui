import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./cli.cjs",
      name: "cemoura-cli",
      formats: ["cjs"],
      fileName: () => `index.cjs`,
    },
    rollupOptions: {
      external: ["fs", "path"],
      output: {
        format: "cjs",
      },
    },
    target: "node14",
    outDir: "dist",
  },
});
