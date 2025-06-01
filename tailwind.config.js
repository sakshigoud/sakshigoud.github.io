/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark tech theme colors
        'gray': {
          950: '#0f172a', // Dark blue-gray background
          900: '#1e293b', // Slightly lighter sections
          800: '#334155', // Card backgrounds
          700: '#475569', // Borders and dividers
        },
        'teal': {
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0891b2',
        },
        'purple': {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        }
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
        'fadeIn': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'skill': '0 0 15px rgba(6, 182, 212, 0.3)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
};