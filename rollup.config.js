import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');

export default {
  input: 'src/StarRating.svelte',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'StarRating' },
  ],
  // use 'generate: 'ssr'' to be able to use this component in sapper
  plugins: [resolve(), svelte({ generate: 'ssr' })],
};
