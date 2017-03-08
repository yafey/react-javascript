/*
还是讲plugin打包，下面两个插件一个是自动生成一个index.html文件
一个是自动打开新窗口。

npm在3.0或者以上版本的时候会报错
*/

var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};