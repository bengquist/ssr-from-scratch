const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",

  entry: "./server/index.tsx",

  devtool: "inline-source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
