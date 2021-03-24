module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "tec-yellow": "#DEFB48",
        "tec-blue": "#08187e",
      },
      fontFamily: {
        "bai-jamjuree": ['"Bai Jamjuree"', "sans-serif"],
      },
      fontSize: {
        scale: ["12vw", "12vw"],
      },
      backgroundImage: (theme) => ({
        "tec-image-1": "url('/images/TEC-header.png')",
        "tec-image-2": "url('/images/Mission.png')",
        "tec-image-3": "url('/images/Group.png')",
        "tec-image-4": "url('/images/Text1.png')",
        "tec-image-5": "url('/images/Defi-Tefi.png')",
        "tec-image-6": "url('/images/Heading_defi2.png')",
        "tec-image-7": "url('/images/Community.png')",
        "tec-image-8": "url('/images/Ecosystem.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
