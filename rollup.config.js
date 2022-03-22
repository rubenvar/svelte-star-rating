import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'StarRating' },
  ],
  plugins: [
    svelte({ 
      // use 'generate: 'ssr'' to be able to use this component in sapper
      compilerOptions: { generate: 'ssr' }
    }),
    css({ output: 'bundle.css' }),
    resolve(),
    production && terser(),
  ],
};
