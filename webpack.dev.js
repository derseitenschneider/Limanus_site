const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const settings = require("./project.settings");

console.log(settings);

module.exports = {
  mode: "development",
  entry: {
    index: "./src/app/index.js",
    about: "./src/app/about.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dev"),
    clean: true,
  },

  watch: true,

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name].[hash][ext]",
        },
      },
      {
        test: /\.php$/i,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Homepage",
      template: "src/index.php",
      filename: "index.php",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      title: "About",
      template: "src/pages/about.php",
      filename: "about.php",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      title: "Header",
      template: "src/includes/header.php",
      filename: "includes/header.php",
      chunks: [],
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 8000,
      watch: true,
      proxy: "http://localhost:8888/1_kunden/limanus/Limanus_site/dev/",
    }),
  ],
};
