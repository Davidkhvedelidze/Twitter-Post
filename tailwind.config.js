/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        photofest: {
          background: "#f6d2ef",
          headline: "#1a032d",
          accent: "#e2a9f1",
          "accent-secondary": "#b4f2ff",
          "accent-deep": "#5f2a82",
          text: "#2c0c42",
        },
      },
      fontFamily: {
        photofest: [
          '"DM Merab Kostava"',
          '"Fira Sans"',
          '"Inter"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
