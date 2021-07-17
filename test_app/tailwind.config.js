const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    mode: "layers",
    content: [
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.ts",
      "src/**/*.tsx",
      "public/**/*.html",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      blue: colors.sky,
      gray: colors.trueGray,
      red: colors.red,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
