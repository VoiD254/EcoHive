import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ecohive: {
          lightBeige: '#D3C8B6',  // closest to RGB(211, 200, 182)
          beige: '#D2C7B5',  // closest to RGB(210, 199, 181)
          darkBeige: '#D1C7B4',  // another close variant
          green1: '#6B8E23',  // example green
          green2: '#556B2F',  // example green
          green3: '#8FBC8F',  // example green
        },
      },
    },
  },
  plugins: [daisyui],
}
