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
          navy: "rgb(var(--theme-bg-rgb) / <alpha-value>)",
          cream: "rgb(var(--theme-bg-rgb) / <alpha-value>)",
          paper: "rgb(var(--theme-text-rgb) / <alpha-value>)",
          ink: "rgb(var(--theme-text-rgb) / <alpha-value>)",
          muted: "rgb(var(--theme-muted-rgb) / <alpha-value>)",
          line: "var(--color-line)",
          sage: "var(--theme-panel)",
          panel: "var(--theme-panel)",
          panelSoft: "var(--theme-band)",
          green: "#1ac7a4",
          blue: "#e5c58b",
          gold: "#e5c58b",
        },
        jamoko: {
          navy: "#001821",
          gold: "#e5c58b",
          teal: "#1ac7a4",
          text: "rgb(var(--theme-text-rgb) / <alpha-value>)",
          "text-dim": "rgb(var(--theme-muted-rgb) / <alpha-value>)",
          "bg-dark": "var(--theme-panel)",
          "bg-light": "var(--theme-band)",
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
