/** @type {import('tailwindcss').Config}
 *
 * tailwind.config.js content [] match is GREEDY, so I'm excluding .js, jsx files from the reg-ex
 *
 */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
