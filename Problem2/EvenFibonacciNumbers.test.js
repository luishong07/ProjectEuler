const EvenFib = require('./EvenFibonacciNumbers')
test(
    'calculates sum of even fibonacci under 4 million',
    ()=>{
        expect(EvenFib()).toBe(4613732)
    }
)