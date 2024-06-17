import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
      borderRadius: {
        '4xl': '0.25rem',
        '8xl': '0.5rem',
        '12xl': '0.75rem',
        '16xl': '1rem',
      },
    },
  },
  plugins: [],
};
export default config;
