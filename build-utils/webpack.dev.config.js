const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
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
