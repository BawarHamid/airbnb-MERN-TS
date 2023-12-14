/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#FF385C",
        "primary-blue": "#455CC6",
        primary: "##da435e",
      },
    },
  },
  plugins: [],
};
