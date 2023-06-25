/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        overlay: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
        line: "linear-gradient(transparent , #fff , transparent)",
        gradient: "bg-gradient-to-r from-pink-500 to-violet-500",
      },
    },
  },
  plugins: [],
};
