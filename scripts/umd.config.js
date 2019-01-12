// For both browsers and Node.js:
// UMD format requires a bundle name

// get the name from our package json
import {name, file} from './config';

export default {
  input: 'src/index.js',
  output: {
    file: `dist/${file}.umd.js`,
    format: 'umd',
    name: name
  }
};
