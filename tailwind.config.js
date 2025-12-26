/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jamoko: {
          navy: "#001821",
          gold: "#E5C58B",
          teal: "#1AC7A4",
          text: "#EDF2F7",
          "text-dim": "#D6E0E7",
          "bg-dark": "#012633",
          "bg-light": "#013542",
        },
      },
      fontFamily: {
        headline: ["Satoshi", "Montserrat", "Helvetica Neue", "sans-serif"],
        body: ["Nunito", "Open Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.5rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(229,197,139,0.2)",
        innerGlow: "inset 0 0 40px rgba(26,199,164,0.15)",
      },
      backgroundImage: {
        "jamoko-gradient":
          "linear-gradient(135deg, #E5C58B 0%, #1AC7A4 100%)",
        "jamoko-glow":
          "radial-gradient(ellipse at center, rgba(229,197,139,0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};
