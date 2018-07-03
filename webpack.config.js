const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const history = require("connect-history-api-fallback");
const dev = Boolean(process.env.WEBPACK_SERVE);
const convert = require("koa-connect");
// const utils = require("utils");
require("babel-core/register");
require("babel-polyfill");

module.exports = {
  mode: dev ? "development" : "production",
  // devtool: dev ? "cheap-module-eval-source-map" : "hidden-source-map",
  entry: ["babel-polyfill", "./src/index.js"],
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
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10240
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunksSortMode: "none"
    })
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
        pathRewrite: {
          "^/api": "/getList"
        }
        // bypass: (req, res, proxyOptions) => {
        //   console.log(req.query);
        //   console.log(res.query);
        // }
      }
    }
  }
};
