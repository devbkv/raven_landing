const options = require('./config'); //options from config.js

const allPlugins = {
  typography: require('@tailwindcss/typography'),
  forms: require('@tailwindcss/forms'),
  containerQueries: require('@tailwindcss/container-queries'),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,php}'],
  darkMode: 'class',
  theme: {
    screens: {
      xl: { max: '1449.99px' },
      lg: { max: '1199.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '479.99px' },
    },
    extend: {
      containers: {
        '2xs': '90rem',
      },
      fontFamily: {
        firasans: ['Fira Sans', 'sans-serif'],
      },
      colors: {
        main: '#0C1117',
        secondary: '#0B0F15',
        tertiary: '#1B2837',
        btn: '#003ADB',
        veryBlue: '#2B61F7',
      },
    },
  },
  plugins: plugins,
};
