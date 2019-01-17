// For browsers:
// compile to a <script> containing a self-executing function ('iife')

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

// get the name from our package json
import {name, file} from './config';

export default {
    input: 'src/index.js',
    output: {
        file: `dist/${file}.iife.js`,
        format: 'iife',
        name: name
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        uglify()
    ]
};
