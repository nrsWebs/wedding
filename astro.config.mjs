// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://matchpatolavida.com/',
  base: 'wedding',
  vite: {
    plugins: [tailwindcss()]
  }
});