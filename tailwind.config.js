import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Malabar Gold inspired palette
          dark: "#1A1A1A", // Deep black for backgrounds
          darkGray: "#2D2D2D", // Secondary dark
          gold: "#D4AF37", // Classic gold
          goldLight: "#F4E4BC", // Light gold accent
          platinum: "#E5E4E2", // Platinum/silver
          purple: "#6B46C1", // Purple-blue for CTAs (like Malabar)
          purpleLight: "#8B5CF6", // Lighter purple
          white: "#FFFFFF",
          offWhite: "#F8F8F8",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 50px rgba(0,0,0,0.08)",
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(230,190,138,0.35), transparent 55%)",
      },
    },
  },
  plugins: [forms],
};
