import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        arcana: {
          blue: '#3584C0',
          purple: '#6fabd8',
          dark: '#050505'
        }
      },
      backgroundColor: {
        'dropdown': '#235880'
      }
    }
  },
  plugins: [],
} satisfies Config

export default config

