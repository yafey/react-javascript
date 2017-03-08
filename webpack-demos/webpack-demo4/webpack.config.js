/*
loader部分参考demo3。
本demo打包css的原理就是在入口文件main.js中require进来css文件，
然后把main.js文件打包到bundle.js,再在html中src='bundle.js',
相当于在<head>中加了:
 <style type="text/css">
    body {
      background-color: blue;
    }
 </style>
*/

module.exports = {
	entry:'./main.js',
	output:{
		filename:'bundle.js'
	},
	module:{
		loaders:[

			{
				test:/\.css$/,
				loader:'style-loader!css-loader' ,
			}

		]
	}

}