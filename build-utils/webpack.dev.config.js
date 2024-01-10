// eslint-disable-next-line @typescript-eslint/no-var-requires
const ESLintPlugin = require("eslint-webpack-plugin");

const config = {
  mode: "development",
  plugins: [
    new ESLintPlugin({
      failOnError: false,
      emitError: true,
      emitWarning: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: "./public",
    },
    allowedHosts: "all",
    proxy: {
      "/api/*": {
        target: process.env.PROXY || "http://localhost:8080",
        changeOrigin: true,
        secure: true,
      },
    },
  },
};

module.exports = config;
