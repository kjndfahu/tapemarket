/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#D9D9D9',
        purple: '#AFA3FD',
      },
      fontFamily: {
        clash: ['"Clash Display"', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        golos: ['"Golos Text"', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(175, 163, 253, 0.5)',
        'glow-lg': '0 0 25px 10px rgba(175, 163, 253, 0.7)',
      },
    },
  },
};