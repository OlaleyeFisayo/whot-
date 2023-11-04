/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wood: "url('./assets/imgs/background.jfif')",
        greenbg: "url('./assets/imgs/green.jpg')"
      },
    },
  },
  plugins: [],
};
