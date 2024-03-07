import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './libs/components/**/*.{js,ts,jsx,tsx,mdx}',
    './libs/design/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      main: ['IRANSansX', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
