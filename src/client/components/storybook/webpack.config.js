const path = require("path");

module.exports = {
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@components": path.resolve(__dirname, "../")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          }
        ]
      }
    ]
  }
};
