import alias from '@rollup/plugin-alias';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'

import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        alias({
            entries: [
                { find: 'src', replacement: './src' },
            ]
        }),
        url(),
        svgr(),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve({
            extensions: ['.js', '.json', '.jsx']
        }),
        commonjs(),
        beep()
    ]
}
