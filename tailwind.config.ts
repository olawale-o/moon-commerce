import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          warm: "#3A3845",
          brown: "#826F66",
        },
        neutral: {
          "200": "#F7F6F5",
          "300": "#E5E5E5",
          "400": "#CAC9CF",
          "500": "#A6A6A8",
          "600": "#807F86",
          "700": "#595667",
          "800": "#3A3845",
        },
      },
      fontFamily: {
        inter: "var(--font-inter)",
        garammond: "var(--font-garammond)",
        g: "var(--font-g)",
      },
    },
  },
  plugins: [],
};
export default config;
