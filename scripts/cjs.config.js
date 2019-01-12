// For Node.js:
// compile to a CommonJS module ('cjs')

import {name, file} from './config';

export default {
  input: 'src/index.js',
  output: {
    file: `dist/${file}.cjs.js`,
    format: 'cjs'
  }
};
