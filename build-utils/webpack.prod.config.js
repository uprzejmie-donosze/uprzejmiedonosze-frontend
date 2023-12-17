const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJsWebpackPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_HOST': JSON.stringify('https://uprzejmiedonosze.net')
    })
  ]
};

module.exports = config;
