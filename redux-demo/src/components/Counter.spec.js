import React from 'react'
import {shallow} from 'enzyme'
import Counter from './Counter'

function setup(value=0){
	//用jest.fn()监听方法
	const actions = {
		onIncrement:jest.fn(),
		onDecrement:jest.fn()
	}

	const component = shallow(<Counter value={value} {...actions}/>)
    
    return {
    	component : component,
    	actions : actions,
    	buttons : component.find('button'),
    	p : component.find('p')
    }
}

describe('Counter component',()=>{
	it('测试次数为0',()=>{
		const {p} = setup()
		expect(p.text()).toMatch(/^Clickead: 0 times$/)
	})
		
	it('第一个按钮被点击应该调用onIncrement'),()=>{
		const {component,buttons} = setup()
		buttons.at(1).simulate('click')
		expect(actions.onIncrement).toBeCalled()
	})

	it("第二个按钮被点击应该调用onDecrement",()=>{
		const {buttons,component} = setup()
		buttons.at(2).simulate('click')
		expect(actions.onDecrement).toBeCalled()
	})

	it("第三个按钮被点击，如果参数是偶数，不应该调用onIecrement",()=>{
		const {buttons,component} = setup(42)
		buttons.at(3).simulate('click')
		expect(actions.onIncrement).not.toBeCalled()
	})

	it("第三个按钮被点击，如果参数是奇数，应该调用onIecrement",()=>{
		const {buttons,component} = setup(43)
		buttons.at(3).simulate('click')
		expect(actions.onIncrement).toBeCalled()
	})
	it("第三个按钮被点击，如果参数是负数，应该调用onIecrement",()=>{
		const {buttons,component} = setup(-43)
		buttons.at(3).simulate('click')
		expect(actions.onIncrement).toBeCalled()
	})
	it("第四个按钮被点击，应该延迟1秒左右执行onIecrement",()=>{
		const {buttons,component} = setup()
		buttons.at(4).simulate('click')
		setTimeout(()=>{
			expect(actions.onIncrement).toBeCalled()
			done()
		},1000)
	})

})