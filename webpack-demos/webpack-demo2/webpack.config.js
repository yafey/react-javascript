/*
 当打包多个文件时的情况，entry可以是对象或者数组。
 filename中可以使用[name]获取entry中定义的入口文件的key
 注意: 1. entry是数组的时候，多个文件打包到一个文件
       2. entry是对象的时候，打包到多个文件

  经常看到的__dirname,是node.js中的一个全局变量，指当前模块的绝对路径。也就是无论如何可以用
  __dirname获取到当前文件的绝对路径。
*/

module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js',
    publicPath:'/demo2/'
  }
};