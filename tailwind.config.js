/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: "#F9F8F6",
        background: "#1e1e1e",
        backgroundSecondary: "#262626",
        yellow_vs: "#D9E577",
        blue_vs: "#389fdc",
        lightblue_vs: "#85d8fb",
        brown_vs: "#d98e73",
      },
    },
    screens: {
      "2xs": "320px",
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
      "3xl": "1600px",
    },
  },
  plugins: [],
};
