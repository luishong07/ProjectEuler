const LargestPalindrom = require('./LargestPalindromeProduct')

test(
    'Finds the largest palindrome made from the product of two 3-digit numbers',
    ()=>{
        expect(LargestPalindrom()).toBe(906609)
    }
)