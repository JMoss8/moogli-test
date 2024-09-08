/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Chivo Mono", "monospace"],
    },
    extend: {
      dropShadow: {
        extreme: "25px 0 150px black",
      },
    },
  },
  plugins: [],
}
