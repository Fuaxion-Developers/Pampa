import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        greenD: {
          100: '#9da664',
        },
        darkD: {
          100: '#3d3d3d',
          200: '#171717',
        },
        brownD: {
          100: '#927363',
        },
        whiteD: {
          100: '#fcffeb',
          200: '#e4d6c9',
        },
      },
    },
  },
  plugins: [],
};
export default config;
