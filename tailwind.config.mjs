/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
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
}
