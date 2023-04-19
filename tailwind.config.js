/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "light-dark-2": "#2A2F4F",
      "light-dark-1": "#917FB3",
      "light-light-2": "#E5BEEC",
      "light-light-1": "#FDE2F3",
      "light-red": "#c53d5f",

      "dark-light-1": "#635985",
      "dark-light-2": "#443C68",
      "dark-dark-1": "#393053",
      "dark-dark-2": "#18122B",

      "dark-2": "#2D2727",
      "dark-1": "#413543",
      purple: "#8F43EE",
      yellow: "#F0EB8D",
      white: "#ffffff",
      black: "#0d0D0D",

      transparent: "transparent",
    },
  },
  plugins: [],
};
