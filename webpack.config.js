const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const mode = process.env.NODE_ENV || "production";
const devtool = mode === "production" ? false : "source-map";

const config = {
  mode,
  entry: path.resolve(__dirname, "./src/client/index.jsx"),
  output: {
    path: path.resolve(__dirname, "./public/js"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    open: true
  },
  devtool,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@actions": path.resolve(__dirname, "src/client/actions"),
      "@components": path.resolve(__dirname, "src/client/components"),
      "@containers": path.resolve(__dirname, "src/client/containers"),
      "@modules": path.resolve(__dirname, "src/client/modules"),
      "@reducers": path.resolve(__dirname, "src/client/reducers"),
      "@selectors": path.resolve(__dirname, "src/client/selectors"),
      "@types": path.resolve(__dirname, "src/client/types"),
      "@constants": path.resolve(__dirname, "src/client/constants.js")
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new Dotenv()
  ]
};

module.exports = config;
