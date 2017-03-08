
// 1.使用bundle文件束分离代码

// 语法 : var waitForChunk = require("bundle-loader!./file.js");
// 你需要异步去等待它
//waitForChunk(function(file) {
    // 这里可以使用file，就像是用下面的代码require进来一样
    // var file = require("./file.js");
//});


// 2.懒加载 : var load = require("bundle-loader?lazy!./file.js");

// 文件束不会被加载，除非你调用了 call 函数
//load(function(file) {

//});


//3.给文件束设置查询参数
//require("bundle-loader?lazy&name=my-chunk!./file.js");


//so  这样main.js打包成bundle.js
//        a.js单独打包

var load = require('bundle-loader!./a.js');
load(function(file){
	document.open();
	document.write('<div>'+file+'</div>')
	document.close();
})