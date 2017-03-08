/*
	webpack 中的 externals 配置提供了「不从 bundle 中引用依赖」的方式。
	比如:
	
	从外部引入jquery
	externals: {
      jquery: 'jQuery'
    }

    externals 支持以下模块上下文(module context)
		1.global - 外部 library 能够作为全局变量使用。用户可以通过在 script 标签中引入来实现。这是 externals 的默认设置。
		2.commonjs - 用户(consumer)应用程序可能使用 CommonJS 模块系统，因此外部 library 应该使用 CommonJS 模块系统，并且应该是一个 CommonJS 模块。
		3.commonjs2 - 类似上面几行，但导出的是 module.exports.default。
		4.amd - 类似上面几行，但使用 AMD 模块系统。

*/

module.exports={
	entry:'./main.jsx',
	output:{
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test: /\.js[x]?$/,
		        exclude: /node_modules/,
		        loader: 'babel-loader',
		        query: {
		        	presets: ['es2015', 'react']
        		}
	
			}
		]
	},
	externals:{
		"data":'data'
	}
}
/*
这里第一个data是 key,第二个data是data.js模块
相当于var data = require('data');
*/