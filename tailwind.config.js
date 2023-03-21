'use strict';

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './apps/**/*.{html,tsx,ts,jsx,js,pcss,scss,css}',
      './libs/**/*.{html,tsx,ts,jsx,js,pcss,scss,css}',
    ],
    // PurgeCSS options
    // Reference: https://purgecss.com/
    //enable: production, // disable purge in dev
    options: {
      rejected: true,
      printRejected: true,
      safelist: ['html', 'body', 'dark'],
    },
  },
  /**
   * Enable dark mode
   */
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
