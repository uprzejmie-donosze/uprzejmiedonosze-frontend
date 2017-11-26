const merge = require('webpack-merge');

const common = require('./webpack.GLOBAL.config.js');

module.exports = module.exports = merge(common, {
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            '/api/*': {
                target: process.env.PROXY || 'http://localhost:8000',
                changeOrigin: true,
                secure: true
            }
        }
    }
});
