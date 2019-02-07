const commonConfig = require('./build-utils/webpack.common.config');
const webpackMerge = require('webpack-merge');

module.exports = (env) => {
  const envConfig = require(`./build-utils/webpack.${env.env}.config.js`);

  return webpackMerge(commonConfig, envConfig);
}
