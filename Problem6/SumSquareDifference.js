// The sum of the squares of the first ten natural numbers is,
    //1^2 + 2^2 +... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
    //(1 + 2 +.. 10)^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 
    //3025 - 385 = 2640
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// sum of squares 

let sumOfSquares = 0

for(let i =1; i <= 100; i++){
    sumOfSquares += i**2
}
// console.log(sumOfSquares)

let sum = 0
let squareOfSums = 0

for(let i = 1; i <= 100; i++){
    sum+=i
}
squareOfSums = sum**2
// console.log(squareOfSums)

let sumSquareDifference = squareOfSums - sumOfSquares
console.log(sumSquareDifference)