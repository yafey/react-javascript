var webpack = require('webpack');
/*
ProvidePlugin 插件  自动加载模块。 任何时候，当 identifier 被当作未赋值的变量时，
module 就会自动被加载，并且 identifier 会被这个 module 输出的内容所赋值。

常用在引用第三方库的操作。
*/
module.exports={
	entry:{
		app:'./main.js'
	},
	output:{
		filename:'bundles.js'
	},
	plugins:[
	new webpack.ProvidePlugin({
	  $: 'jquery',
	  jQuery: 'jquery',
	  'window.jQuery': 'jquery'
	})]
}