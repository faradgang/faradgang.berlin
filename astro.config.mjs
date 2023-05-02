import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://chohner.github.io",
  base: "/faradgang.berlin",
  experimental: {
    assets: true,
  },
});
