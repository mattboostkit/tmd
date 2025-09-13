/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#772477',
          dark: '#5a1a5a',
          light: '#9a549a',
        },
        secondary: {
          DEFAULT: '#FFD700',
          dark: '#e6c200',
        },
        accent: '#FF6B6B',
      },
      fontFamily: {
        sans: ['"Comic Neue"', '"Nunito"', '"Quicksand"', 'system-ui', 'sans-serif'],
        display: ['"Fredoka"', '"Comic Neue"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}