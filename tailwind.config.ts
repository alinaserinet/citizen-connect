import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './libs/components/**/*.{js,ts,jsx,tsx,mdx}',
    './libs/design/**/*.{js,ts,jsx,tsx,mdx}',
    './libs/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      main: ['IRANSansX', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      keyframes: {
        pop: {
          '0%': { transform: 'scale(var(--btn-focus-scale, 0.98))' },
          '40%': { transform: 'scale(1.02)' },
          '100%': { transform: 'transform: scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
