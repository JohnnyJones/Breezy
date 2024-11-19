/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './main.tsx',
    './components/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'breezy': '#5470ff',
      },
    },
  },
  plugins: [],
}

