/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #7D8ABC, #304463)', // Red-500 to Orange-500
      },
    },
    colors: {
      primaryColor:"#322C2B",
      borderColor:"#FFFED3",
      textColor:"#F7F9F2",
      textSecond:"#2F3645",
      secondaryColor:"#B6C7AA",
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
