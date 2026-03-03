/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        paper: "#f5f0e8",
        cream: "#ede7db",
        accent: "#c2402a",
        "accent-hover": "#a83520",
        sage: "#4a7c59",
        gold: "#b8964e",
        slate: "#5a6068",
        "light-slate": "#8a8e94",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Libre Franklin"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        masthead: ["clamp(56px, 10vw, 120px)", { lineHeight: "0.88" }],
      },
    },
  },
  plugins: [],
};
