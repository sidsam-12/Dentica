import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dentalBlue: '#0E5DB8',
        mintGreen: '#25C27A',
        softWhite: '#FFFFFF',
        mist: '#F7FBFF',
        navy: '#1B2B48'
      },
      boxShadow: {
        premium: '0 18px 60px rgba(14, 93, 184, 0.14)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(14,93,184,0.14), transparent 38%), radial-gradient(circle at bottom right, rgba(37,194,122,0.16), transparent 34%)'
      }
    }
  },
  plugins: []
};

export default config;
