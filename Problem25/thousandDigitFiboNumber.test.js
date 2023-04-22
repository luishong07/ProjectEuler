const thousandDigit = require('./thousandDigitFiboNumber')
test("What is the index of the first term in the Fibonacci sequence to contain 1000 digits?",
()=>{
    expect(thousandDigit()).toBe(4782)
})