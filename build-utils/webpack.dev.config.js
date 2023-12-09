const ESLintPlugin = require('eslint-webpack-plugin')

const config = {
  mode: 'development',
  plugins: [new ESLintPlugin()],
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
