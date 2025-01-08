import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        buddaSky: "#C3EBFA",
        buddaSkyLight: "#CDEBFD",
        buddaPurple: "#CFCEFF",
        buddaPurpleLight: "#F1F0FF",
        buddaYellow: "#FAE27C",
        buddaYellowLight: "#FEFCE8",
        buddaPink: "#fac3f3",
      },
    },
  },
  plugins: [],
};
export default config;
