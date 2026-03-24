import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://sacha-schlumpf.github.io/006-pokemon/",
  plugins: [react()],
});
