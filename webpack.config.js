const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function buildConfiguration(env) {
  return {
    mode: env,
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, './lib')
    },
    optimization: {
      concatenateModules: true,
      namedModules: false,
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [['@babel/env', {targets: {node: 'current'}}]],
            plugins: ['@babel/external-helpers'],
            comments: false,
            cacheDirectory: true
          }
        }
      ]
    },
    target: 'node',
    node: {__dirname: false},
    plugins: [new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(env)})]
  };
};
