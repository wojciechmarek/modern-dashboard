const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(), // can pass the options here using { }, but we use svelte.preprocess.config.js for that (gives us more context)
};
