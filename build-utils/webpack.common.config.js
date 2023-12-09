const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: true
})

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: commonPaths.outputPath,
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, use:[{loader: 'babel-loader'}], exclude: /node_modules/ },
      { test: /\.jsx?$/, use:[{loader: 'babel-loader'}], exclude: /node_modules/ },
      {
        test: /\.(png|jpe?g|eot|svg|ttf|woff|woff2)/,
        use: [{loader: 'file-loader?name=assets/[name].[ext]'}]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    HtmlWebpackPluginConfig
  ]
}

module.exports = config;
