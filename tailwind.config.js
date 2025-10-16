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
        brand: {
          100: 'var(--color-brand-100)',
          200: 'var(--color-brand-200)',
          300: 'var(--color-brand-300)',
          400: 'var(--color-brand-400)',
          500: 'var(--color-brand-500)',
          600: 'var(--color-brand-600)',
          700: 'var(--color-brand-700)',
        },
        sunrise: {
          200: 'var(--color-sunrise-200)',
          300: 'var(--color-sunrise-300)',
          500: 'var(--color-sunrise-500)',
        },
        teal: {
          200: 'var(--color-teal-200)',
          400: 'var(--color-teal-400)',
          500: 'var(--color-teal-500)',
        },
        gold: {
          300: 'var(--color-gold-300)',
          400: 'var(--color-gold-400)',
        },
        slate: {
          200: 'var(--color-slate-200)',
          500: 'var(--color-slate-500)',
          700: 'var(--color-slate-700)',
          900: 'var(--color-slate-900)',
        },
        cloud: {
          50: 'var(--color-cloud-50)',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-accent)', 'var(--font-heading)', 'cursive'],
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
