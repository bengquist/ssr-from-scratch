const path = require("path");

module.exports = {
  target: "node",

  entry: "./src/index.tsx",

  devtool: "inline-source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
