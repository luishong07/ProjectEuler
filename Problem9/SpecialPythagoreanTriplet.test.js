const PythagoreanTriplet = require('./SpecialPythagoreanTriplet')

test(
    "There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.",
    ()=>{
        expect(PythagoreanTriplet()).toBe(31875000)
    }

)