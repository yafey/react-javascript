## this
***

this的作用是隐式的传递一个上下文对象。使得我们的代码更加的优雅。

```
function foo(){
    console.log(this.name.toUpperCase());
}

var obj = {
    name : 'tom'
}

foo.call(obj); //TOM
```
this并不是指指向自身，学习过java等语言的童鞋应该听过一个常说的概念，this指向调用方，即谁调用就指向谁。

下面的代码说明this不是指向自身，但是输出0是为什么? 
```
function foo(num) {
    console.log( "foo: " + num ); 
    //记录 foo 被调用的次数     
    this.count++;
} 
 
foo.count = 0; 

var i; 
 
for (i=0; i<10; i++) {
   if (i > 5) {
      foo( i );     
   } 
} // foo: 6 // foo: 7 // foo: 8 // foo: 9 
 
// foo 被调用了多少次？ 
console.log( foo.count ); // 0 -- WTF?
```

抛砖引玉，我们说说怎么解决上述代码的问题:
* this.count++改成foo.count++
* foo(i);调用改成 foo.call(foo,i);

原因我们接着看下去。

this知识点:

* this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调 用时的各种条件
* 调用位置和调用栈(可通过debugger在chrome控制台观察) this上下文对象就是调用栈倒数第二个。
```
function baz() {     
    // 当前调用栈是：baz    
    // 因此，当前调用位置是全局作用域 
    console.log( "baz" );    
    bar(); // <-- bar 的调用位置
} 
 
function bar() { 
    // 当前调用栈是 baz -> bar    
    // 因此，当前调用位置在 baz 中
    console.log( "bar" );
    foo(); // <-- foo 的调用位置
    } 
 
function foo() {     
    // 当前调用栈是 baz -> bar -> foo
    // 因此，当前调用位置在 bar 中 
        console.log( "foo" );
    } 
 
baz(); // <-- baz 的调用位置
```
> **绑定规则**

* 默认绑定
> *用不带任何修饰的函数引用进行调用的，因此只能使用 默认绑定，默认绑定到全局，无法应用其他规则。
如果使用严格模式（strict mode），那么全局对象将无法使用默认绑定，因此 this 会绑定 到 undefined*
```
function foo(){
    console.log(this.a)
}
var a = 2;

foo();//2
```

* 隐式绑定
> *当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象*
```
function foo(){
    console.log(this.a)
};
var obj = {
    a:2,
    foo:foo
};
obj.foo(); //2
```

隐式丢失:

一个最常见的 this 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把this绑定到全局对象或者 undefined上，取决于是否是严格模式。

```
function foo(){
    console.log(this.a)
}
function doSome(fn){
    fn(); //这里等价于执行foo(); 默认绑定
}
var obj ={
    a:2,
    foo:foo
}
var a ="test"
doSome(obj.foo) //test
```
我个人的窍门就是看foo()是不是干净的，左右有没有别的代码调用、包裹。没有就是默认绑定，不管其形式是不是隐式绑定。

* 显示绑定
> 你可以直接指定 this 的绑定对象，因此我 们称之为显式绑定。(apply,call,bind...)

```
function foo(){
    console.log(this.a)
};
var obj = {
    a:2,
    foo:foo
};
foo.call(obj);
```
* new 绑定
> *使用new进行构造函数调用的时候会执行下边:*
* 创建（或者说构造）一个全新的对象。
* 这个新对象会被执行 [[ 原型 ]] 连接。 
* **这个新对象会绑定到函数调用的 this**。 
* 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。

```
function foo(a) { 
    this.a = a; 
}  
 
var bar = new foo(2); 
console.log( bar.a ); // 2 this指向新的对象

```

判断this

现在我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的顺序来进行判断：
1. 函数是否在 new 中调用（new 绑定）？如果是的话 this 绑定的是新创建的对象。 var bar = new foo()
2. 函数是否通过call、apply（显式绑定）或者硬绑定调用？如果是的话，this 绑定的是 指定的对象。 var bar = foo.call(obj2)
3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this绑定的是那个上下文对象。 var bar = obj1.foo()
4. 如果都不是的话使用默认绑定。如果在严格模式下，就绑定到undefined，否则绑定到全局对象。 var bar = foo()


**一些特殊的情况**:
* 如果你把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值 在调用时会被忽略，实际应用的是默认绑定规则
```
function foo(){
    console.log(this.a)
}
var a = "test";

foo.call(null); //test
```
* 你有可能（有意或者无意地）创建一个函数的“间接引用”，在这 种情况下，调用这个函数会应用默认绑定规则。
```
function foo() {
    console.log( this.a ); 
} 

var a = 2;  
var o = { a: 3, foo: foo };  
var p = { a: 4 }; 
 
o.foo(); // 3 
(p.foo = o.foo)(); // 2
```

* 箭头函数并不是使用 function 关键字定义的，而是使用被称为“胖箭头”的操作符 => 定 义的。箭头函数不使用 this 的四种标准规则，而是根据外层（函数或者全局）作用域来决 定 this，且不会改变
```
function foo(){
    return (a)=>{
        console.log(this.a)
    }
};
var obj1 = {
    a:2
}; 
 
var obj2 = {
    a:3
};
var bar = foo.call(obj1);
bar.call(obj2) // 2   而不是3

```

*foo() 内部创建的箭头函数会捕获调用时 foo() 的 this。由于 foo() 的 this 绑定到 obj1， bar（引用箭头函数）的 this 也会绑定到 obj1，箭头函数的绑定无法被修改。（new 也不 行！）*
