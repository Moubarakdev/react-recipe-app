/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-dark": "url('../src/assets/dd.jpg')",
        "bg-light": "url('../src/assets/light.jpg')",
      },
    },
  },
  plugins: [],
};
