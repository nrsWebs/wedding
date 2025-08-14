// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpine from '@astrojs/alpinejs';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'http://matchpatolavida.com/',
  // base: 'wedding',
  vite: {
    plugins: [tailwindcss()]
  },
  // experimental: {
  //   svg: {
  //     mode: 'sprite',
  //   },
  // },
  output: 'server',
  integrations: [alpine({ entrypoint: '/src/entrypoint' }), db()],  
});