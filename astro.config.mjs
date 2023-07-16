import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { defaultLang } from "./src/i18n/ui";
const { SITE, BASE } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: SITE ?? "https://faradgang.berlin",
  base: BASE ?? "",
  experimental: { assets: true, redirects: true },
  redirects: { "/": `/${defaultLang}` },
});
