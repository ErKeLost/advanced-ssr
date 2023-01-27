const { resolve } = require("path");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const n = require("webpack-node-externals");
module.exports = {
  entry: {
    path: "./src/client/index.js",
  },
  target: "web", // 不会打包node自带的库 fs buffer
  mode: "development",
  output: {
    filename: "client_bundle.js",
    path: resolve(__dirname, "../dist"),
  },
  resolve: {
    extensions: [".wasm", ".js", ".vue", "jsx"],
  },
//   externals: [n()], // 排除 node 中的生产包
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
};
