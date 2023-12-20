const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    publicPath: '/new'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          mangle: true,
          keep_fnames: false,
          toplevel: true,
        }
      })
    ],
  },
};

module.exports = config;
