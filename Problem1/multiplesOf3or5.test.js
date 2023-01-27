// const { default: test } = require('node:test')
const multiplesOf3or5 = require('./multiplesOf3or5')
test('checks for total sum of multiples of 3 or 5', ()=>{
    expect(multiplesOf3or5()).toBe(233168)
})