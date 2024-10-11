/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#010103",
          200: "#0E0E10",
          300: "#1C1C21",
          500: "#3A3A49",
          600: "#1A1A1A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#E4E4E6",
          700: "#D6D9E9",
          600: "#AFB0B6",
          500: "#62646C",
        },
      },
      backgroundImage: {
        terminal: "url('./assets/terminal.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        ".c-space": {
          "@apply sm:px-10 px-5": {},
        },
        ".head-text": {
          "@apply sm:text-4xl text-3xl font-semibold": {},
          "background-image":
            "linear-gradient(to right, #BEC1CF 60%, #D5D8EA 60%, #D5D8EA 100%)",
          "background-clip": "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        },
        ".nav-ul": {
          "@apply flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20":
            {},
        },
        ".nav-li": {
          "@apply text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5":
            {},
        },
        ".nav-li_a": {
          "@apply text-lg md:text-base hover:text-white transition-colors": {},
        },
        ".nav-sidebar": {
          "@apply absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block":
            {},
        },
        ".text-gray_gradient": {
          "@apply bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent":
            {},
        },

        /* button component */
        ".btn": {
          "@apply flex gap-4 items-center justify-center cursor-pointer p-3 rounded-md bg-black-300  transition-all active:scale-95 text-white mx-auto":
            {},
        },

        ".btn-ping": {
          "@apply animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75":
            {},
        },

        ".btn-ping_dot": {
          "@apply relative inline-flex rounded-full h-3 w-3 bg-green-500": {},
        },

        /* hero section */
        ".hero_tag": {
          "@apply text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal":
            {},
        },

        /* about section */
        ".grid-container": {
          "@apply w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5":
            {},
        },

        ".grid-headtext": {
          "@apply text-xl font-semibold mb-2 text-white font-generalsans": {},
        },

        ".grid-subtext": {
          "@apply text-[#afb0b6] text-base font-generalsans": {},
        },

        ".copy-container": {
          "@apply cursor-pointer flex justify-center items-center gap-2": {},
        },

        /* projects section  */
        ".arrow-btn": {
          "@apply w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient":
            {},
        },

        ".tech-logo": {
          "@apply w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center":
            {},
        },

        /* clients section */
        ".client-container": {
          "@apply grid md:grid-cols-2 grid-cols-1 gap-5 mt-12": {},
        },

        ".client-review": {
          "@apply rounded-lg md:p-10 p-5 col-span-1 bg-black-300 bg-opacity-50":
            {},
        },

        ".client-content": {
          "@apply flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7":
            {},
        },

        /*  work experience section */
        ".work-container": {
          "@apply grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12": {},
        },

        ".work-canvas": {
          "@apply col-span-1 rounded-lg bg-black-200 border border-black-300":
            {},
        },

        ".work-content": {
          "@apply col-span-2 rounded-lg bg-black-200 border border-black-300":
            {},
        },

        ".work-content_container": {
          "@apply grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5":
            {},
        },

        ".work-content_logo": {
          "@apply rounded-3xl w-16 h-16 p-2 bg-black-600": {},
        },

        ".work-content_bar": {
          "@apply flex-1 w-0.5 mt-4 h-full bg-black-300 group-hover:bg-black-500 group-last:hidden":
            {},
        },

        /* contact section */
        ".contact-container": {
          "@apply grid md:grid-cols-2 grid-cols-1 gap-5 mt-12": {},
        },

        ".field-label": {
          "@apply text-lg text-white-600": {},
        },

        ".field-input": {
          "@apply w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none":
            {},
        },

        ".field-btn": {
          "@apply bg-black-500 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3":
            {},
        },

        ".field-btn_arrow": {
          "@apply bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent":
            {},
        },

        /* footer section */
        ".social-icon": {
          "@apply w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200":
            {},
        },
      });
    }),
  ],
};
