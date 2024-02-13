/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-white": "#fff",
        "color-gray-1": "#a098ae",
        "color-main": "#363b64",
        "color-gray-2": "#c1bbeb",
        "color-purple": "#4d44b5",
        "linear-transparent-purple-10": "rgba(77, 68, 181, 0.1)",
        "color-text": "#303972",
        "color-orange": "#fb7d5b",
        "color-gray": "#f5f5f5",
        "color-yellow": "#fcc43e",
        "color-background": "#f3f4ff",
      },
      spacing: {},
      fontFamily: {
        "text-text-regular-2": "Poppins",
        "text-text-2-regular": "Cairo",
      },
      borderRadius: {
        lg: "18px",
        "21xl": "40px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "5xl": "24px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
