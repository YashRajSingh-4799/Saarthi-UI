/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "collection-1-gray": "var(--collection-1-gray)",
        "collection-1-light-pink": "var(--collection-1-light-pink)",
        "collection-1-saarthi-dark-green": "var(--collection-1-saarthi-dark-green)",
        "collection-1-saarthi-green-1": "var(--collection-1-saarthi-green-1)",
        "collection-1-saarthi-yellow": "var(--collection-1-saarthi-yellow)",
      },
    },
  },
  plugins: [],
};
