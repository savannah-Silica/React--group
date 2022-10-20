/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        primary: "#050402",
        secondary: "#f7f8fa",
        tertiary: "#131419",
        accent: {
          DEFAULT: "#ede685",
          hover: "#925a2b",
        },
        paragraph: "#878e99",
      },
    },
  },
  plugins: [],
};
