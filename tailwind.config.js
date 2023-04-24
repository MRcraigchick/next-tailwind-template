/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "prime-dk": "",
      "prime-md": "",
      "prime-light": "",
      contrast: "",
      highlight: "",
      error: "",
      "place-grey": "",
      shadow: "",
    },
    extend: {
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
