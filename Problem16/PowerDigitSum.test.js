const PowerDigitSum = require('./PowerDigitSum')

test('What is the sum of the digits of the number 2^1000?',
    ()=>{
        expect(PowerDigitSum()).toBe(1366n)
})