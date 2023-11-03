const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const FileManagerPlugin = require("filemanager-webpack-plugin");
const PugPlugin = require("pug-plugin");

module.exports = {
  entry: {
    index: path.join(__dirname, "src/pug/index.pug"),
    // about: path.join(__dirname, "src/pug/about.pug"),
  },
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
    filename: "js/[name].[contenthash:8].js",
    // filename: "[name].*",
    // path: __dirname + "/dist",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /.pug$/,
        loader: PugPlugin.loader,
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, "src", "template.html"),
    //   filename: "index.html",
    //   inject: "body",
    // }),
    new PugPlugin(),
    // new FileManagerPlugin({
    //   events: {
    //     onStart: {
    //       delete: ["dist"],
    //     },
    //   },
    // }),
  ],
  devtool: "inline-source-map",
  devServer: {
    watchFiles: path.join(__dirname, "src/"),
    port: 9000,
  },
};
