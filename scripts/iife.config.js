// For browsers:
// compile to a <script> containing a self-executing function ('iife')

// get the name from our package json
import {name, file} from './config';

export default {
  input: 'src/index.js',
  output: {
    file: `dist/${file}.iife.js`,
    format: 'iife',
    name: name
  }
};
