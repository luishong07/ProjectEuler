const NonAbundantSums = require('./Non-AbundantSums')
test("Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.",()=>{
    expect(NonAbundantSums()).toBe(5774)
})