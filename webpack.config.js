const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const history = require("connect-history-api-fallback");
const dev = Boolean(process.env.WEBPACK_SERVE);
const convert = require("koa-connect");

module.exports = {
  mode: dev ? "development" : "production",
  // devtool: dev ? "cheap-module-eval-source-map" : "hidden-source-map",
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "public"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunksSortMode: "none"
    })
  ]
};
module.exports.serve = {
  port: 8080,
  add: app => {
    app.use(convert(history()));
  }
};
// if (dev) {
//   module.exports.serve = {
//     port: 8080,
//     add: app => {
//       app.use(convert(history()));
//     }
//   };
// }
// modules.export = config;
