const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.prod.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'QueryBuilder',
    libraryTarget: 'commonjs'
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', path.join(__dirname, 'dist/**/*')]
    })
  ],
  target: 'node',
  externals: [
    nodeExternals({
      // this will include all assets from node modules, required to bundle the components
      // keep an eye on the build Oo
      //   allowlist: [/\.(?!(?:jsx?|json|js|css|scss)$).{1,5}$/i],
      modulesDir: './node_modules'
    }),
  ]
});
