import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss({
        config: {
          content: [
            './faithful-filament/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
          ],
          theme: {
            extend: {
              colors: {
                primary: '#36454F',
                accent: '#FF5733',
                background: '#F5F5F5',
                success: '#28a745',
              },
              fontFamily: {
                sans: ['Poppins', 'Lato', 'sans-serif'],
              },
            },
          },
          plugins: [],
        },
      }),
    ],
  },
});