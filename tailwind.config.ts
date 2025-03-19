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
          //#21B3B0
          '50': '#f1fcfa',
          '100': '#cff8f3',
          '200': '#a0efe7',
          '300': '#68e0d8',
          '400': '#39c8c3',
          '500': '#21b3b0',
          '600': '#178a8a',
          '700': '#166e6f',
          '800': '#175658',
          '900': '#17494a',
          '950': '#072a2c',
        },
      },
      keyframes: {
        appear: {
          '0%': {
            width: '0rem',
          },
          '100%': {
            width: '20rem',
          },
        },
        fade: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0.8',
          },
        },
      },
      animation: {
        appear: 'appear 0.3s ease-in-out',
        fade: 'fade 0.3s ease-in',
      },
    },
  },
  plugins: [],
} satisfies Config;
