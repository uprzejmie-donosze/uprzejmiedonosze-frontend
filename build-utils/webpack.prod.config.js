const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_HOST': JSON.stringify('https://uprzejmiedonosze.net')
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
