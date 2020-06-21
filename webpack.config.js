const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlwebpackplugin = require("html-webpack-plugin")
module.exports = {
  entry: [
    "./src/scripts/index.js",
    // "./src/styles/index.css",
    "./src/styles/index.scss",
    "./src/styles/navbar.css",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 2222,
    open: true,
    compress: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "234djfd.css",
    }),
    new htmlwebpackplugin({template: './index.html'})
  ],
  mode: "development",
  module: {
    rules: [
      {
        // Babel loader
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          // "sass-loader"
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ],
  },
};
