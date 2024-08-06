/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      falcon: {
        50: '#f5f3f1',
        100: '#e7dfda',
        200: '#d0c0b8',
        300: '#b59b8f',
        400: '#9f7d70',
        500: '#916c61',
        600: '#7c5852',
        700: '#644644',
        800: '#563d3d',
        900: '#4b3839',
        950: '#251a1b',
      },
    },
  },
  plugins: [],
};
