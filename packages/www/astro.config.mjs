// @ts-check
import { defineConfig } from 'astro/config';
import aws from "astro-sst";

import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  output: "server",
  security: {
    checkOrigin: true
  },
  adapter: aws(),
  integrations: [tailwind({
    applyBaseStyles: false,
  }), svelte()],
});