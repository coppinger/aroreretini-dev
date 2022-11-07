/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "lg:grid-cols-[1fr_2px_4fr]",
    "lg:grid-cols-[1fr_2px_3fr_2px_1fr]",
  ],
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
      animation: {
        "copied-ping": "ping 1.5s ease-in-out 1 forwards",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#FFF",
            h2: {
              color: "#FFF",
              fontFamily: "inter",
            },
            h3: {
              color: "#FFF",
              fontFamily: "inter",
            },
            h4: {
              color: "#FFF",
              fontFamily: "inter",
            },
            h5: {
              color: "#FFF",
              fontFamily: "inter",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
