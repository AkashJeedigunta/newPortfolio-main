import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/newPortfolio-main/",
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});