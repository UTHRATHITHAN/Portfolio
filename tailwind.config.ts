import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: '1rem',
        sm: '1rem',
        md: '4rem',
        lg: '10rem',
        xl: '14rem',
        '2xl': '25rem',
      },
    },
    extend: {
      animation: {
        "bounce": "bounce 1s infinite",
        "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
    },
    fontFamily: {
      space: ["var(--font-space)"],
      mont: ["var(--font-mont)"],
      satoshi: ["satoshi"],
      poppins: ["Poppins"],
      opensans: ['"Open Sans"']
    }
  },
  plugins: [],
};
export default config;
