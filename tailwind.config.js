/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          'gold-light': '#F3E5AB',
          dark: '#0D0D0D',
          charcoal: '#1A1A1A',
          gray: '#2C2C2C',
          cream: '#F9F8F6',
          sand: '#EFECE6',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        luxury: '.25em',
      }
    },
  },
  plugins: [],
}
