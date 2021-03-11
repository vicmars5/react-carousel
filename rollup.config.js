import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'
import scss from 'rollup-plugin-scss'

import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/Carousel.tsx',
  output: [{
    file: pkg.main,
    format: 'cjs'
  }, {
    file: pkg.module,
    format: 'es'
  }],
  plugins: [
    external(),
    typescript(),
    resolve({ extensions: ['js', 'ts', 'tsx'] }),
    commonjs(),
    scss(),
    visualizer()
  ]
}
