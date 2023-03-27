/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        moderateViolet: "hsl(263, 55%, 52%)",
        veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        veryDarkBlackishBlue: "hsl(219, 29%, 14%)",
        white: "hsl(0, 0%, 100%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        body: ["'Barlow Semi Condensed'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
