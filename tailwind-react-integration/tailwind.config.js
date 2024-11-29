module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Paths for Tailwind to scan and purge unused styles
    './public/index.html',
  ],
  darkMode: 'class', // Options: 'media' or 'class'
  theme: {
    extend: {}, // Customize the default theme
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Adds 'active' variant for background-color
      textColor: ['group-hover'],  // Adds 'group-hover' variant for textColor
    },
  },
  plugins: [], // Add Tailwind plugins here
};

