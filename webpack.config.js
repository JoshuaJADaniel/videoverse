const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[contenthash].bundle.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: "/",
    port: 8080,
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new CopyPlugin({
      patterns: [{ from: "public/static" }],
    }),
  ],
};
