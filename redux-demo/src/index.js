import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducer/reduce'

// 建立store,参数传reducer
const store = createStore(counter)

// 获取render的位置
const rootE1 = document.getElementById("app")

const render = ()=> ReactDOM.render(
	<Counter value={store.getState()}
	onIncrement={() => store.dispatch({type:'INCREMENT'})}
	onDecrement={() => store.dispatch({type:'DECREMENT'})}
	/>,
	rootE1
)

render()
store.subscribe(render)