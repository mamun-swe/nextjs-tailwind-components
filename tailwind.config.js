/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FBBC15",
        primarygray: "#FFEEBF",
        secondary: "#7F97A9",
        grayblack: "#5B5B5B",
        muted: "#A1A1A1",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
