const SmalllestMultiple = require('./SmallestMultiple')

test(
    'determines the smallest positive number that is evenly divisible by all of the numbers from 1 to 20',
    ()=>{
        expect(SmalllestMultiple()).toBe(232792560)
    }
)