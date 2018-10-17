const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            screw_ie8: true,
            warnings: false,
            mangle: {keep_fnames: true}
          },
          sourceMap: true
        })
      ]
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
