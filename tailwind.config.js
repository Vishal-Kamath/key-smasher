/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['var(--ubuntu-font)', 'sans-serif'],
      },
      colors: {
        'twitter': '#1DA1F2',
        'linkedin': '#0072b1',
      },
    },
  },
  plugins: [],
};
