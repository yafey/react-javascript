/*
entry文件是jsx文件的时候，需要使用loader配置，因为webpack只针对js文件打包，对css,png...打包都需要配置loader.
module 是对模块的处理逻辑的配置项,它是一个对象。
loaders 定义一系列的加载器,它是一个数组,这个数组中的每一项都是一个对象。

loader各个选项的配置说明:
	1. test － 正则,用于匹配要处理的文件。比如要处理jsx文件:test: /\.jsx?$/
	2. loader/loaders － 字符串(loader)或者数组(loaders), 如果只需要用到一个模块加载器 ,则使用loader:'style!css',如果要使用多个模块加载器,则使用loaders: ["style", "css"]
	3. exclude － 字符串或者数组,指屏蔽(不需处理)的文件（文件夹）,比如不需要处理node_modules,则使用exclude: /node_modules/,如果不需要处理node_modules和bower_components则使用exclude:/(node_modules|bower_components)/
	4. include － 字符串或者数组,指包含(必须处理)的文件（文件夹）,同exclude配置类似,不再说明
	5. query：为loaders提供额外的设置选项（可选）,比如配置babel处理es2015和React就使用query: { presets: ['es2015', 'react'] }
*/

module.exports ={
	entry:'./main.jsx',
	output:{
		filename:'bundle.js'
	},
	module: {
	    loaders:[
	      {
	        test: /\.js[x]?$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader?presets[]=es2015&presets[]=react'
	      },
	    ]
	}

}