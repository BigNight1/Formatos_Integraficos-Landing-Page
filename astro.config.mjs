// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://formatosintergraficos.pe', // Cambia esto por tu dominio real
  integrations: [
    tailwind(),
    sitemap()
  ]
});
