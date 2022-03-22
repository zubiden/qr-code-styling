const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.config.common.js");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    allowedHosts: "all",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "head",
      scriptLoading: "blocking"
    })
  ]
});
