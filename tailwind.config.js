/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        adda: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#E31B2B', // primary Adda247 brand red
          600: '#cc1423',
          700: '#a50e1b',
          800: '#880f19',
          900: '#731119',
          dark: '#101828',
          card: '#FFFFFF',
          bgpink: '#FFF5F6',
          borderpink: '#FED7DA',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(227, 27, 43, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 2px 12px 0 rgba(16, 24, 40, 0.06)',
        'hover': '0 12px 30px -4px rgba(227, 27, 43, 0.15)',
      }
    },
  },
  plugins: [],
}
