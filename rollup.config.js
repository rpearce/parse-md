import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-auto-external'
import resolve from 'rollup-plugin-node-resolve'

const plugins = [
  external(),
  resolve(),
  commonjs({ include: /node_modules/ }),
  babel({
    configFile: './babel.config.js',
    only: ['./source'],
    runtimeHelpers: true,
    sourceMaps: 'inline'
  })
]

const esm = {
  dir: './dist/esm',
  exports: 'named',
  format: 'esm',
  name: 'parse-md',
  sourcemap: true
}

const cjs = {
  dir: './dist/cjs',
  exports: 'named',
  format: 'cjs',
  name: 'parse-md',
  sourcemap: true
}

const config = [
  {
    input: ['./source/index.js'],
    output: [esm, cjs],
    plugins
  }
]

export default config
