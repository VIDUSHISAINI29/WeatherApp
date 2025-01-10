/** @type {import('tailwindcss').Config} */
export default {
   important: true,
   darkMode: "class",
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            "weather-primary": "#0d9dcd",
            "weather-secondary": "#caf0f8",
         },
      },
      fontFamily: {
         Oswald: ["Oswald, sans-Serif"],
      },
   },
   plugins: [require("tailwindcss-primeui")],
   prefix: "tw-",
};
