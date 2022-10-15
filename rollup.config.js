import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { babel } from '@rollup/plugin-babel';
import tailwindcss from 'tailwindcss';
import autoprefixer from "autoprefixer";

const tailwindConfig = require('./tailwind.config.js');

export default {
    input: "./src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: 'es'
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        typescript(),
        postcss({
            extensions: ['.css'],
            plugins: [
                tailwindcss(tailwindConfig),
                autoprefixer
            ],
        }),
        babel()
    ]
}