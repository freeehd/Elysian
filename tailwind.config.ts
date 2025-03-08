import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New color palette
        teal: {
          DEFAULT: "#008080",
          100: "#00191a",
          200: "#003333",
          300: "#004c4d",
          400: "#006666",
          500: "#008080",
          600: "#00cccc",
          700: "#1affff",
          800: "#66ffff",
          900: "#b3ffff",
        },
        caribbean: {
          DEFAULT: "#006666",
          100: "#001414",
          200: "#002929",
          300: "#003d3d",
          400: "#005252",
          500: "#006666",
          600: "#00b8b8",
          700: "#0affff",
          800: "#5cffff",
          900: "#adffff",
        },
        grey: {
          DEFAULT: "#6B7280",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        "rich-black": {
          DEFAULT: "#0A1A1A",
          100: "#0A1A1A",
          200: "#0F2424",
          300: "#152E2E",
          400: "#1A3838",
          500: "#204242",
          600: "#2B5757",
          700: "#366C6C",
          800: "#428282",
          900: "#4D9797",
        },
        // Update existing arcana colors with new palette
        arcana: {
          blue: "#008080", // Teal
          purple: "#66b2b2", // Lighter teal (was #008080)
          dark: "#0A1A1A", // Rich black
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundColor: {
        dropdown: "#008080", // Teal
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

