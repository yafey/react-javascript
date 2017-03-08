// 参考官网:
// https://webpack.js.org/plugins/define-plugin/#components/sidebar/sidebar.jsx
// 就是允许你创建一个全局变量作为环境识别标识。
var webpack = require("webpack");

var flagPlugin = new webpack.DefinePlugin({
	'DEBUG':JSON.stringify("true")
})


module.exports={
	entry:"./main.js",
	output:{
		filename:"bundle.js"
	},
	plugins:[flagPlugin]
}