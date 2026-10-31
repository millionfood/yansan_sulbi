import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://yangsan-sulbi.example.com",
  vite: {
    envPrefix: ["PUBLIC_"],
  },
});
