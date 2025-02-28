import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "talked-warranty-epinions-butler.trycloudflare.com", // Додайте цей хост
      "localhost",
      "127.0.0.1",
      "refused-main-hawaiian-nhs.trycloudflare.com",
      // Можна додати інші дозволені хости за потреби
    ],
  },
});
