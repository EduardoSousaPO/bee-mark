import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bm: {
          yellow: "#FFF002",
          black: "#000000",
          white: "#FFFFFF",
          grayLight: "#C1C1C1",
          grayDark: "#434343",
        },
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        accent: ["Anton", "sans-serif"],
        body: ["system-ui", "Arial", "sans-serif"],
      },
      borderRadius: {
        bmSm: "10px",
        bmMd: "16px",
        bmLg: "24px",
      },
    },
  },
  plugins: [],
};

export default config;
