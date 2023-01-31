const SumOfSquare = require('./SumSquareDifference')

test('Finds the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.',
    ()=>{
        expect(SumOfSquare()).toBe(25164150)
    }
)