events是node.js 最重要的模块，events模块只提供了一个对象events.EventEmitter，EventEmitter 的核心是事件发射与事件监听器。

Node.js中大部分的模块，都继承自Event模块。
与DOM树上事件不同，不存在事件冒泡、逐层捕获等行为。

EventEmitter 支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
```
const events = require("events");

var ee = new events.EventEmitter();


var listener = function(arg){
	console.log("触发first事件"+arg);
}

var listener2 = function(arg){
	console.log("触发next事件"+arg);
}
ee.on("first",listener)

ee.on("next",listener2)

// emitter.once注册监听是一次性监听，当触发一次后，会移除该监听
ee.once("once",function(arg){
	console.log("触发once事件"+arg);
})

```



```
/*emitter.removeListener的第二个参数是要移除的监听，而非移除成功后的回调函数*/

ee.removeListener("first",listener);
ee.emit("first","aa")

/*EventEmitter.removeAllListeners([event])   移除（批定事件）所有监听器*/
ee.removeAllListeners("next");


/*
    EventEmitter.emit(event, [arg1], [arg2], [...])   触发指定事件
    参数1：event  字符串，事件名
    参数2：可选参数，按顺序传入回调函数的参数
    返回值：该事件是否有监听
*/
var isSuccess = ee.emit("first","1次");
var isSuccess2 = ee.emit("next","2次");
var isSuccess3 = ee.emit("once","3次");
var isSuccess4 = ee.emit("once","4次");
console.log("isSuccess:"+isSuccess+",isSuccess2:"+isSuccess2+",isSuccess3:"+isSuccess3+",isSuccess4:"+isSuccess4);
```