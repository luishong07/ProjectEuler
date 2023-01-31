const LargestProduct = require('./LargestProductSeries')

test('Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?',
    ()=>{expect(LargestProduct()).toBe(23514624000)}
)