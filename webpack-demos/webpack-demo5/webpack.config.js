/**
打包图片。
可以看出方法还是在入口文件中获取img的DOM对象，然后打包到output
*/

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  }
};