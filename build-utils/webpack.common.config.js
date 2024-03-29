const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: true
})

const config = {
  entry: './src/index.tsx',
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
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: '/assets/images/',
            name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: 'src/assets',
        to: 'assets'
      }]
    }),
    new webpack.ProgressPlugin(),
    HtmlWebpackPluginConfig,
    new Dotenv({
      path: './.env',
      safe: true,
    })
  ]
}

module.exports = config;
