const BigPrime = require('./10001Prime')

test('Finds 10001 prime',
    ()=>{
        
        expect(BigPrime()).toBe(104743)
    }
)