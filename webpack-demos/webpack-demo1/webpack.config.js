/*
 *  entry定义打包的入口文件，直白的说就是从哪个文件开始打包。
 *  output定义输出的bundle.js文件信息，就是打包到这个bundle.js文件中
 *  output里面有三个参数，1.filename : 打包到这个文件名
 *                        2.path : bundle.js文件的位置，demo用的webpack-dev-server工具是存在内存，是看不到bundle.js的
 *                        3.publicPath : 相当于网络路径，开发环境用的，配置了该路径后，html引入的路径要变成pulicPath/bundle.js
 */

 // cd webpack-demo1 运行webpack-dev-server  然后访问http://127.0.0.1:8080可以看见输出helloworld
module.exports = {
  entry: './main.js',
  output: {
  	publicPath:'/demo1/',
    filename: 'bundle.js'
  }
};