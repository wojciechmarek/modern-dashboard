'use strict';

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './apps/**/*.{html,svelte,tsx,ts,jsx,js,pcss,scss,css}',
      './libs/**/*.{html,svelte,tsx,ts,jsx,js,pcss,scss,css}',
    ],
    // PurgeCSS options
    // Reference: https://purgecss.com/
    //enable: production, // disable purge in dev
    options: {
      rejected: true,
      printRejected: true,
      safelist: ['html', 'body', 'dark'],
      safelistPatterns: [/svelte-/],
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
