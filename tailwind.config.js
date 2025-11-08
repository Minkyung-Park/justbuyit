/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // src 안 모든 React 파일
  ],
  theme: {
    extend: {
      colors: {
        brand: "#4285F4",
      },
    },
  },
  plugins: [],
};
