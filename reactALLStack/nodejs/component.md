## 模块
***

nodejs官方提供很多核心模块，具有最高的加载优先级。

自定义文件模块可以是.js文件，.json文件，c/c++文件(.node)。

用require("url")加载：
> "/..." 绝对路径   
> "./..." 同级文件 相对路径   
> "../..." 相对路径


Nodejs尝试加载的优先级 js文件 > json文件 > node文件

nodejs中require同一模块的时候不会重复加载。第一次加载的时候就会缓存模块。第二次加载是直接从缓存中读取模块继续使用的。

exports 和 module.exports 的区别:
* module.exports 初始值为一个空对象 {}
* exports 是指向的 module.exports 的引用
* require() 返回的是 module.exports 而不是 exports

module就是这个模块本身。module.exports指向一个空对象，exports也指向这个空对象，这是他们唯一的联系，exports所做的事情是收集属性，如果module.exports当前没有任何属性的话，exports会把这些属性赋予module.exports。如果module.exports已经存在一些属性的话，那么exports中所用的东西都会被忽略。


* exports.xxx，相当于在导出对象上挂属性，该属性对调用模块直接可见
* exports =相当于给exports对象重新赋值，调用模块不能访问exports对象及其属性，切断了与module.exports的联系，此时require模块之后也是无法调用的。
* 如果此模块是一个类，就应该直接赋值module.exports，这样调用者就是一个类构造器，可以直接new实例


