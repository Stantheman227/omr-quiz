import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'sans': ['OMR-Sans-Regular', 'sans-serif'],
        'sans-bold': ['OMR-Sans-Bold', 'sans-serif'],
        'sans-extra-bold': ['OMR-Sans-Extra-Bold', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "omr-orange": "#F2B200",
        "omr-purple": "#8259ff",
        "omr-purple-light": "#6644b8",
        "omr-black": "#0E1014",
      },
    },
  },
  plugins: [],
} satisfies Config;
