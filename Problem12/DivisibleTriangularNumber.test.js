const DivisibleNumber = require('./DivisibleTriangularNumber')

test('What is the value of the first triangle number to have over five hundred divisors?',
    ()=>{
        expect(DivisibleNumber()).toBe(76576500)
    }
)
