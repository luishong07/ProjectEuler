const LargestPrimeFactor = require('./LargestPrimeFactor')

test(
    'determines the largest prime factor of 600851475143',
    ()=>{
        expect(LargestPrimeFactor()).toBe(6857)
    }
)