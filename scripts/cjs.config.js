// For Node.js:
// compile to a CommonJS module ('cjs')

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

import {name, file} from './config';

export default {
    input: 'src/index.js',
    output: {
        file: `dist/${file}.cjs.js`,
        format: 'cjs'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        uglify()
    ]
};
