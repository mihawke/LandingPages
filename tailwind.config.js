/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Roboto Mono", 'serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'space': ['Space Mono', 'sans-serif'],
        'spacegrotesk': ['Space Grotesk', 'serif'],
        'inter': ["Inter", 'serif']
      },
      backgroundImage: {
        'back-shadow':'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,1) 100%)',
        'inner-shadow': 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8) 100%)',
      },

      keyframes: {
        beam: {
          '0%': { width: '0%' },
          '100%': { width: '70%' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollR: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        beam: 'beam 500ms ease-in-out forwards',
        scroll: 'scroll 15s linear infinite',
        scrollR: 'scroll 15s linear infinite reverse',
      },
    },
  },
  plugins: [],
}