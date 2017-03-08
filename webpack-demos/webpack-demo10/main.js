
require("./a")

require.ensure([],function(require){
	require("./b")
})

/*
1. require.emsure(depencies,callback,chunkname);

第一个参数是模块依赖，第二个参数是回调函数，回掉函数的参数是require,
所以可以继续在回掉里面引入模块，第三个是chunk 的名称通过提供 require.ensure() 不同执行点相同的名称，我们可以保证所有的依赖都会一起放进相同的 文件束(bundle)。

2. depencies为空，如上所示，.b.js会被单独打包（从bundle.js中分离出来）。生成一个新的bundle.js


3.depencies有参数的情况下，比如 

require.ensure(["./a.js"],function(require){
	require("./b")
})
a.js 和 b.js 都被打包到一起，而且从主文件束中拆分出来。
但只有 b.js 的内容被执行。
a.js 的内容仅仅是可被使用，但并没有被输出。
想去执行 a.js，我们需要异步地引用它，如 require('./a.js')，
让它的 JavaScritp 被执行。
*/