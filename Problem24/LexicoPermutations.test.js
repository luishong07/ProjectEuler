const LexicoPermutation = require('./LexicoPermutations')

test("What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?",
    ()=>{
        expect(LexicoPermutation()).toBe("2783915460")
    }
)