const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HelloWorldPlugin = require('./src/testPlugin')

module.exports = {
  entry: {
    app: './src/index.js',
    // module: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'code spliting'
    }),
    new HelloWorldPlugin()
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
  ],
}