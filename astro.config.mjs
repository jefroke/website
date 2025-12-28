import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jessekeller.de',
  integrations: [tailwind()],
  output: 'static',
});
