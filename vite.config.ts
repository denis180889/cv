import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Allows tunneling tools like ngrok (random subdomains) to reach the dev server.
    allowedHosts: true,
  },
});
