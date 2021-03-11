import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'
import scss from 'rollup-plugin-scss'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  input: './src/Carousel.tsx',
  output: [{
    file: pkg.main,
    format: 'cjs',
    sourcemap: true
  }, {
    file: pkg.module,
    format: 'es',
    sourcemap: true
  }],
  plugins: [
    external(),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true
    }),
    resolve({ extensions: ['js', 'ts', 'tsx'] }),
    commonjs(),
    scss(),
    visualizer()
  ]
}
