const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

const rootPath = path.resolve(__dirname, "./");
const srcPath = path.resolve(rootPath, "src");
const libPath = path.resolve(rootPath, "lib");

module.exports = {
  entry: srcPath + "/index.ts",
  output: {
    path: libPath,
    filename: "qr-code-styling.js",
    library: "QRCodeStyling",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), new EslintWebpackPlugin({ extensions: [".ts"] })],
  resolve: {
    extensions: [".ts", ".js"]
  }
};
