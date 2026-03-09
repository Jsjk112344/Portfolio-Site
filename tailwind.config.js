/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#fafafa',
        muted: '#a3a3a3',
        border: '#262626',
        card: '#171717',
        accent: '#f59e0b',
        'accent-dark': '#451a03',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
