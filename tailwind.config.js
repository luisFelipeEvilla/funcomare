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
        titleColor: '#1a202c',
      },
      fontFamily: {
        titleFont: ['"Roboto"', 'sans-serif'],
      },
    },
    plugins: [],
  }
}
