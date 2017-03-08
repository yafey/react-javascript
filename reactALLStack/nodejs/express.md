## express
***

如果直接用nodejs内置的http核心模块构建服务，大概写成下边这样:
```
// 引入nodejs自带的http服务器模块
const http = require("http");
// url模块
const url = require("url");


//创建服务模块

//通过依赖注入的方式注入路由模块,请求处理模块
function start(route,handle){
	//基于事件驱动的回调
	function onRequest(request,response){
		var urlName = url.parse(request.url).pathname;
		//注入路由模块,请求处理模块
		route(handle,urlName,response,request);
	}
	http.createServer(onRequest).listen(8888);
}

exports.start = start;
```
这只是server.js，还得有入口、路由...。直观的感觉就是麻烦。所以，express诞生了。

* 什么是express?
> Express是一个轻量级、简洁、易用的Node.js Web MVC开发框架

req.query：处理get请求，获取get请求参数 

req.params：处理/:xxx 形式的get或post 请求，获取请求参数 

req.body：处理post请求，获取post请求体

req.param()：处理get和post请求，但查找优先级由高到低为 req.params→req.body→req.query

* 参考：
> http://www.expressjs.com.cn/