/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ".625rem",
        sm: ".812rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.562rem",
        "2xl": "1.938rem",
        "3xl": "2.438rem",
        "4xl": "3.062rem",
        "5xl": "3.812rem",
        "6xl": "4.75rem",
        "7xl": "5.938rem",
        "8xl": "7.438rem",
        "9xl": "9.312rem",
      },
      screens: {
        xs: "340px",
        sm: "480px",
        md: "768px",
        lg: "1080px",
        xl: "1440px",
        "2xl": "1920px",
      },
    },
  },
  plugins: [],
};
