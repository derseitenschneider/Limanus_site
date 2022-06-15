const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const settings = require("./project.settings");
const pages = settings.pages;
const pageType = settings.pageType;

module.exports = {
  mode: "development",
  entry: pages.reduce((config, page) => {
    config[page] = `./src/app/${page}.js`;
    return config;
  }, {}),
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
        test: /\.${pageType}/i,
        loader: "html-loader",
      },
    ],
  },

  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/pages/${page}.${pageType}`,
          filename: `${page}.${pageType}`,
          chunks: [page],
        })
    ),
    new HtmlWebpackPlugin({
      title: "Header",
      template: "src/includes/header.php",
      filename: "includes/header.php",
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      title: "Footer",
      template: "src/includes/footer.php",
      filename: "includes/footer.php",
      chunks: [],
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 8000,
      watch: true,
      proxy: "http://localhost:8888/1_kunden/limanus/Limanus_site/dev/",
    })
  ),
};

//  plugins: [
//     new HtmlWebpackPlugin({
//       title: "Homepage",
//       template: "src/index.php",
//       filename: "index.php",
//       chunks: ["index"],
//     }),
//     new HtmlWebpackPlugin({
//       title: "About",
//       template: "src/pages/about.php",
//       filename: "about.php",
//       chunks: ["about"],
//     }),
//     new HtmlWebpackPlugin({
//       title: "Header",
//       template: "src/includes/header.php",
//       filename: "includes/header.php",
//       chunks: [],
//     }),
//     new BrowserSyncPlugin({
//       host: "localhost",
//       port: 8000,
//       watch: true,
//       proxy: "http://localhost:8888/1_kunden/limanus/Limanus_site/dev/",
//     }),
//   ],
