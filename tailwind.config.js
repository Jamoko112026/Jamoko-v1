/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* ======================
         COLORS
      ====================== */

      colors: {
        calm: {
          navy: "#001821",
          cream: "#001821",
          paper: "#EDF2F7",
          ink: "#EDF2F7",
          muted: "#D6E0E7",
          line: "#214654",
          sage: "#013542",
          panel: "#012633",
          panelSoft: "#013542",
          green: "#1AC7A4",
          blue: "#E5C58B",
          gold: "#E5C58B",
        },

        /* JAMOKO BRAND */

        jamoko: {
          navy: "#001821",
          gold: "#E5C58B",
          teal: "#1AC7A4",
          text: "#EDF2F7",
          "text-dim": "#D6E0E7",
          "bg-dark": "#012633",
          "bg-light": "#013542",
        },

        /* SL BAUTEC BRAND */

        sl: {
          navy: "#141E2A",
          navyDark: "#0F1720",
          navyLight: "#182434",

          orange: "#F28C28",
          orangeHover: "#E07C1F",

          green: "#1AC7A4",

          textSoft: "#D6DCE6",
        },
      },

      /* ======================
         TYPOGRAPHY
      ====================== */

      fontFamily: {
        headline: ["Satoshi", "Montserrat", "Helvetica Neue", "sans-serif"],
        body: ["Nunito", "Open Sans", "system-ui", "sans-serif"],
      },

      /* ======================
         UI TOKENS
      ====================== */

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
