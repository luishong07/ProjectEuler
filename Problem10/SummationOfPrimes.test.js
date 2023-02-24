const SummationOfPrimes = require('./SummationOfPrimes')

test(
    "Find the sum of all the primes below two million.",
    ()=>{
        expect(SummationOfPrimes()).toBe(142913828922)
    }
)