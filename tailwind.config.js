/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a2b2a2',
          400: '#7a907a',
          500: '#5d755d',
          600: '#4a5e4a',
          700: '#3d4e3d',
          800: '#333f33',
          900: '#2b352b',
        },
        beige: {
          50: '#fdfcfa',
          100: '#f9f5f0',
          200: '#f2e9de',
          300: '#e8d5c4',
          400: '#dbbfa2',
          500: '#cfa578',
          600: '#c4956c',
          700: '#a3785a',
          800: '#85624c',
          900: '#6c5040',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};