import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://jessekeller.de',
  integrations: [tailwind()],
  output: 'static',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
});
