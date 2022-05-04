const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,

  devtool: "source-map",
  devServer: {
    static: "./dist",
  },

  module: {
    rules: [
      {
        test: /.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],
};
