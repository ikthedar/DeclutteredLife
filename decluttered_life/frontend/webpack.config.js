const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // this is our entry file
  output: {
    path: path.resolve(__dirname, "./static/frontend"), // in this directory we are showing the output after getting the source code from src
    filename: "[name].js", // need to change the name depending on our project
  }, 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};