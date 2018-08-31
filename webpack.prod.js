const merge = require('webpack-merge');
const UgligyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  // 生产模式中使用inline- 和eval-会增加bundle大小
  // devtool: 'source-map',
  plugins: [
    // new UgligyJSPlugin({
    //   // sourceMap: true
    //   compress: false
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
})