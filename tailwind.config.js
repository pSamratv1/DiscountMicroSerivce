/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        poppins: [`Poppins, sans-serif`],
        "dm-sans": [`DM Sans, sans-serif`],
        chillax: [`Chillax, sans-serif`],
      },
      boxShadow: {
        "custom-05": "0px 10px 50px rgba(0, 0, 0, 0.05)",
        "custom-10": "0px 10px 20px rgba(0, 0, 0, 0.10)",
        "custom-15": "0px 10px 20px rgba(0, 0, 0, 0.15)",
        "custom-25": "0px 10px 20px rgba(0, 0, 0, 0.25)",
        "custom-25-dark": "10px 25px 50px rgba(0, 0, 0, 0.25)",
        "colored-1": "2px 2px 30px 2px #FFF5EC",
        "dropdown-box": "0px 2px 4px rgba(0, 0, 0, 0.08)",
        "module-box": "0px 10px 20px #000000",
        "slight-top": "0px -4px 5px lightGray",
        "top-medium": "0px -4px 6px -2px rgba(122,122,122,1)",
        "down-medium": "0px 4px 6px -2px rgba(122,122,122,1)",
        "left-medium": "-4px 0px 6px -2px rgba(122,122,122,1)",
        "right-medium": "4px 0px 6px -2px rgba(122,122,122,1)",
        "top-left-medium": "-4px -4px 6px -2px rgba(122,122,122,1)",
        "down-left-medium": "4px -4px 6px -2px rgba(122,122,122,1)",
        "top-right-medium": "-4px 4px 6px -2px rgba(122,122,122,1)",
        "down-right-medium": "4px 4px 6px -2px rgba(122,122,122,1)",
        language: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        button1: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
        "discount-card":"0px 1px 2px 0px rgba(21, 30, 40, 0.08), 0px 2px 4px 0px rgba(13, 23, 33, 0.08)",
        
      },
      backgroundColor: {
        "discountCard" : " #FFF", 
        

      },

      colors: {
        input: {
          100: "#F3F4F6",
        },
        "icons":{
          100: "#624BFF",
          200: "#0DCAF0",
          300: "#DC3545",
          400: "#28A745",
        },

        "new-black": {
          200: "#4B5563",
          300: "#ABABAB",
          400: "#92929D",
          500 : "#212B36",
          600:"#161C24"
        },
        "new-blue": {
          700: "#1F3D61",
        },
        logo: {
          pinkish: "#FF6363",
        },
        footer: {
          blueish: "#1F3D61",
        },
        tags: {
          manager: "#59E6F6",
        },
        info: {
          100: "#EEF6FF",
          light: "#CCF8FE",
        },
        primary: {
          100: "#E1E1E1",
          light: "#DAD7FE",
          lighter: "#9A9AB0",
          normal: "#02A0FC",
          medium: "#5541D8",
          bold: "#5541D7",
          dark: "#4339F2",
          more: "#7A5CFA",
        },
        success: {
          light: "#E2FBD7",
          normal: "#34B53A",
        },
        warning: {
          light: "#FFF5CC",
          normal: "#FFB200",
        },
        danger: {
          light: "#FFE5D3",
          normal: "#F61F1F",
        },
        light: {
          100: "#F7F7FC",
          200: "#DBD7F4",
          250: "#CCCCCC",
          300: "#E2E2EA",
          350: "#F8F8F8",
          400: "#D3D3D3",
          450: "#F4F7FC",
          600: "#F5F5F5",
          700: "#D9D9D9",
        },
        dark: {
          100: "#666666",
          200: "#5C5C5C",
          300: "#3F3F3F",
          320: "#333333",
          350: "#333333E5",
          400: "#35353D",
          450: "#35353D",
          500: "#1E1E1E",
          550: "##291F1F",
          600: "#5C5C5C40",
          700: "#000F37",
          800: "#585858",
        },
        lightGray: "#FFE5D3",
        newBlack: "#35353D",
        extras: {
          gray: "#E1E1FB",
          lightblue: "#48B0F4",
          reddish: "#F61F1F",
        },
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
  plugins: [],
};
