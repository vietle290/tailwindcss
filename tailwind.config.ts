import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "#FF69B4",
        blue: "#0000FF",
        red: "#FF0000",
        vuejs: {
          100: "#42b883",
          200: "#389162",
          300: "#2f7c54",
          400: "#286541",
          500: "#214e30",
          600: "#1c3e2e",
        },
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    }
  },
  plugins: [],
} satisfies Config;
