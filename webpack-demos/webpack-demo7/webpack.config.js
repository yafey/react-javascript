
/*
本demo讲的是插件的配置和打包，就是在webpack.config.js中获取插件对象
然后在plugins数组中配置。

本案例中的插件是webpack内置的优化压缩插件。
*/
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports={
	entry:'./main.js',
	output:{
		filename:'bundle.js'
	},
	plugins:[
		new uglifyJsPlugin({
			compress:{
				warnings:false
			}
		})
	]
}