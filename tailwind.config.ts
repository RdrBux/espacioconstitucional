import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-source-sans)'],
        serif: ['var(--font-source-serif)'],
      },
      colors: {
        primary: {
          //#1D8084
          '50': '#f2fbfa',
          '100': '#d2f5f2',
          '200': '#a4ebe6',
          '300': '#6fd9d7',
          '400': '#41c0c0',
          '500': '#27a3a5',
          '600': '#1d8084',
          '700': '#1b666a',
          '800': '#1a5155',
          '900': '#1a4447',
          '950': '#09272a',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
