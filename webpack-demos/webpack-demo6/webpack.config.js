/*
打包css modules.
css也可以像语言一样有自己的语法。参考阮一峰 css modules:
http://www.ruanyifeng.com/blog/2016/06/css_modules.html
*/

module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      }
    ]
  }
};