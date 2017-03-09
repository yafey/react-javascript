import counter from './reduce'


describe("reducer",()=>{
	describe("counter",()=>{
		it("提供初始化state",()=>{
			expect(counter(undefined,{})).toBe(0)
		})

		it("发送INCREMENT的action",()=>{
			expect(counter(1,{type:'INCREMENT'})).toBe(2)
		})

		it("发送DECREMENT",()=>{
			expect(counter(1,{type:'DECREMENT'})).toBe(0)
		})
		it("忽略未定义action",()=>{
			expect(counter(1,{type:'unknow'})).toBe(1)
		})
	})
})