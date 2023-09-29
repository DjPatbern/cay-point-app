/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        "custom-green": "#00AD50",
        "custom-dark-blue": "#04304B",
        "custom-white": "#FFFFFF",
        "custom-maroon": "#991541",
        "custom-grey": "#9C9C9C",
        "custom-ash": "#FAFAFA",
        "custom-light-white": "#edeef0",
        "custom-red": "#F84528",
        "custom-orange": "#FFA11F",
        "custom-Green": "#1AAA55",
        "custom-normal-blue": "#1F78D1",
        "custom-black": "#020202",
        "custom-dark-green": "#248175",
        "custom-modal-ash": "#ECEEF0",
        "custom-modal-red": "#9CC741",
      },
    },
  },
  plugins: [],
}