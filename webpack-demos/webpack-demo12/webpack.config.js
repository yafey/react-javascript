//当多个脚本都含有相同代码块的时候，
//你可以使用CommonsChunkPlugin将相同的部分题取出来，
//分离成一个文件。

/*
CommonsChunkPlugin 插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，
这个文件包括多个入口 chunk 的公共模块。
通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，
便存起来到缓存中供后续使用。这个带来速度上的提升，
因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，
再去加载一个更大的文件。
1.语法:
new webpack.optimize.CommonsChunkPlugin({
  name: "commons",
  // ( 公共chunk(commnons chunk) 的名称)

  filename: "commons.js",
  // ( 公共chunk 的文件名)

  // minChunks: 3,
  // (模块必须被3个 入口chunk 共享)

  // chunks: ["pageA", "pageB"],
  // (只使用这些 入口chunk)
})
2.注意:你必须在 入口chunk 之前加载生成的这个 公共chunk
<script src="commons.js" charset="utf-8"></script>
<script src="entry.bundle.js" charset="utf-8"></script>
*/
var webpack2 = require("webpack");
module.exports={
	entry:{
		bundle1:'./main1.jsx',
		bundle2:'./main2.jsx'
	},
	output:{
		filename:'[name].js'
	},
	module:{
		loaders:[
			{ test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
		]
	},
	plugins: [
    new webpack.optimize.CommonsChunkPlugin("common.js")
  ]
}