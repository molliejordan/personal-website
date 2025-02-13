/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Overpass Mono"', 'monospace'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
        inter: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

