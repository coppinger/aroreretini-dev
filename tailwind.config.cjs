/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        glamour: ["Glamour", "serif"],
      },
      colors: {
        black: "#0E0E0E",
        gray: "#868686",
      },
    },
  },
  plugins: [],
};
