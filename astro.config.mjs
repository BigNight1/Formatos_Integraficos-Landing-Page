// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://formatosintergraficos.pe',

  /**
   * URLs SIN barra final, en una sola forma.
   *
   * Antes no estaba definido, así que Astro usaba su valor por defecto
   * ('ignore'): cada página respondía en DOS URLs (`/galeria` y `/galeria/`,
   * ambas 200) y las señales se contradecían — el canonical salía con barra
   * (`/galeria/`), los enlaces internos y el sitemap antiguo sin barra.
   * Eso es contenido duplicado en las 8 páginas del sitio.
   *
   * Con 'never' el canonical, el sitemap y los enlaces internos coinciden en la
   * misma forma. La redirección de `/pagina/` a `/pagina` la remata Vercel con
   * `trailingSlash: false` en vercel.json.
   */
  trailingSlash: 'never',

  integrations: [
    tailwind(),
    sitemap(),
    icon()
  ]
});
