/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // for Vite
    "./src/**/*.{js,jsx,ts,tsx}", // for React
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563eb",  // main brand blue
          dark: "#0f172a",  // footer dark navy
        },
      },
    },
  },
  plugins: [],
};
