const LargestProductInGrid = require('./LargestProductInGrid')

test('What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?',
    ()=>{
        expect(LargestProductInGrid()).toBe(70600674)
    }
)