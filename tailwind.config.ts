import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arcana: {
          blue: "#008080",
          purple: "#008080",
          dark: "#008080",
        },
      },
      backgroundColor: {
        dropdown: "#008080",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
