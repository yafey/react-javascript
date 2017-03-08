/*
对于一个大型大型应用来说，把所有的代码放在一个文件里效率是很低的。
webpack支持将代码分成若干个代码块。
尤其是在某些代码块只会在一些情况下被引用，这些代码块应该按需加载。
首先，你可以使用 require.ensure 来定义一个分割点

官方文档:https://webpack.js.org/guides/code-splitting-require/#components/sidebar/sidebar.jsx
*/


module.exports={
	entry:"./main.js",
	output:{
		filename:"bundle.js"
	}
}