const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: 'development',
  plugins: [
    new ESLintPlugin({
      failOnError: false,
      emitError: true,
      emitWarning: true,
    }),
    new webpack.DefinePlugin({
      'process.env.API_HOST': JSON.stringify('http://localhost:8080')
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: './public',
    },
    proxy: {
      '/api/*': {
          target: process.env.PROXY || 'http://localhost:8080',
          changeOrigin: true,
          secure: true
      }
    }
  }
}

module.exports = config;
