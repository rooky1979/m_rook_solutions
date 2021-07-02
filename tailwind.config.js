module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        education: "url('/hex.jpg')",
        technologies: "url('/mac.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
