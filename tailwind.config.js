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
        'xs': '13px',
        'contentText': '14px',
        'xx': '12px',
        'header': '18px',
        'title': '15px',
        'logo': '13px',
        'sml': '10px',

      },
      width: {
        'picture_w_vid_md': '10%',
        'descriptions_w_vid_md': '90%',
        'picture_w_vid_mb': '30%',
        'descriptions_w_vid_mb': '70%',
        'icon_w': '20%',
        'descriptions_w': '80%',
      }
    },
  },
  darkMode: "class", // Enable dark mode
  plugins: [nextui()], // Enable NextUI plugin
};

export default config;
