/** @type {import('tailwindcss').Config}
 *
 *
 */
module.exports = {
  prefix: "",
  important: true,
  content: ["../../packages/ui/**/*.{ts,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
