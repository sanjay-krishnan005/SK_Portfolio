/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-orange": "#D4AF37", // Radiant Metallic Gold
        "golden": "#D4AF37",
        "golden-light": "#F3D068",
        "golden-dark": "#B89628",
        "light-black": "#121318", // Sleek Charcoal / Light Black
        "charcoal": "#181920",
        "darkblue": "#121318", // Replaces legacy darkblue with light-black
        "surface-dark": "#1A1B24",
        "cornsilk": "#1E202A",
        "whitesmoke": "#16171E",
      },
    },
  },
  plugins: [],
};

