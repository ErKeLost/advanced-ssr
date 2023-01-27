const { resolve } = require("path");
const n = require("webpack-node-externals");
module.exports = {
  entry: {
    path: "./src/server/index.js",
  },
  target: "node", // 不会打包node自带的库 fs buffer
  mode: "development",
  output: {
    filename: "server_bundle.js",
    path: resolve(__dirname, "../dist"),
  },
  externals: [n()], // 排除 node 中的生产包
};
