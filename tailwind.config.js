import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowMove: 'slowMove 5s infinite', // Duración ajustada a 5 segundos
      },
      keyframes: {
        slowMove: {
          '0%, 100%': { transform: 'translateX(0)' }, // Posición inicial y final
          '50%': { transform: 'translateX(5px)' },    // Mueve solo 5px a la derecha
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  darkMode: "class",
  plugins: [nextui()],
};
