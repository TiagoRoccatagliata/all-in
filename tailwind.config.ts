import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        allin: {
          bg: "#F4F3EF",    // Blanco cálido
          ink: "#0A1B2A",   // Azul petróleo
          gold: "#D4A14E",  // Dorado
        },
      },
    },
  },
  plugins: [],
};
export default config;
