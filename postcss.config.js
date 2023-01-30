module.exports = {
  plugins: {
    'postcss-import': {},
    // Reference: https://tailwindcss.com/docs/using-with-preprocessors
    'tailwindcss/nesting': {},
    tailwindcss: {},
    // Reference: https://github.com/csstools/postcss-preset-env
    'postcss-preset-env': {
      autoprefixer: {},
      stage: 3,
      features: {
        'custom-properties': false,
        // Reference: https://tailwindcss.com/docs/using-with-preprocessors
        'nesting-rules': false,
      },
    },
  },
};
