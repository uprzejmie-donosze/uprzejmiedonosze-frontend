const merge = require('webpack-merge');

const common = require('./webpack.GLOBAL.config.js');

module.exports = module.exports = merge(common, {
    output: {
        path: `${__dirname}/public`,
        publicPath: '/public',
        filename: 'bundle.js'
    }
});
