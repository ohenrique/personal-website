/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      colors: {
        'dark-gray': '#1A1A1A',
      },
    },
  },
  plugins: [],
}
