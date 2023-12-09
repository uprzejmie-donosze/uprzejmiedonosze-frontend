const commonConfig = require('./build-utils/webpack.common.config');
const { merge } = require('webpack-merge')

module.exports = (env) => {
  let envConfig = require(`./build-utils/webpack.prod.config.js`);
  if (env.dev == true) {
    envConfig = require(`./build-utils/webpack.dev.config.js`);
  }
  return merge(commonConfig, envConfig);
}
