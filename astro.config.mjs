// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({
      experimentalReactChildren: true,
    })],
    markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});