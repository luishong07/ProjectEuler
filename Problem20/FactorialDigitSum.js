// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!
let total = 1n

for(let i = 1n; i <= 100; i++){
    total *= i
}

// console.log(total)
let stringNumber = total.toString()
// console.log()
let totalString = 0
for(let j = 0; j < stringNumber.length; j++){
    totalString += parseInt(stringNumber[j])
}
console.log(totalString)