import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Bind dev server to all network interfaces (equivalent to `vite --host`)
  server: {
    host: true,
  },
  build: {
    sourcemap: false,
    target: "es2020",
  }
});
