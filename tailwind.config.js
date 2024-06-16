// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Include NextUI theme files
  ],
  theme: {
    extend: {
      fontSize: {
        'bigGreeting': '25px',
        'bigGreetingMobile': '21px',
        'smallGreeting': '15px',
        'sm': '14.2px',
        'md': '28px',
        'xs': '14px',
        'contentText': '14.5px',
        'xx': '12px',
        'header': '18px',
        'title': '16px',
        'logo': '13px',
      },
    },
  },
  darkMode: "class", // Enable dark mode
  plugins: [nextui()], // Enable NextUI plugin
};

export default config;
