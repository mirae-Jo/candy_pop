import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ['primary-Fcolor']: 'var(--primary-Fcolor)',
        ['secondary-Fcolor']: 'var(--secondary-Fcolor)',
        ['primary-blue']: 'var(--primary-blue)',
        ['secondary-blue']: 'var(--secondary-blue)',
        ['primary-pink']: 'var(--primary-pink)',
        ['secondary-pink']: 'var(--secondary-pink)',
        ['primary-bg']: 'var(--primary-bg)',
        ['secondary-bg']: 'var(--secondary-bg)',
        ['primary-line']: 'var(--primary-line)',
        ['secondary-line']: 'var(--secondary-line)',
        ['primary-accent']: 'var(--primary-accent)',
      },
    },
  },
  plugins: [],
};
export default config;
