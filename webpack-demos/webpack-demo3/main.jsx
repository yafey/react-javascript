const React = require('react');
const ReactDOM = require('react-dom');

const HelloWorld = (props)=>{
	return(<h1>Hello, world!</h1>)
}
ReactDOM.render(
  <HelloWorld/>
  ,
  document.querySelector('#app')
);
