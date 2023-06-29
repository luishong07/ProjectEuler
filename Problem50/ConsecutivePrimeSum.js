// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 +5+7+11+13

// This is the longest sum of consecutive primes that adds to a prime below one-hundred.

// The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21
//  terms, and is equal to 953.

// Which prime, below one-million, can be written as the sum of the most consecutive primes?
import isPrime from "../isPrime.js"


const primesBelowMillion = []

for(let i = 953; i <= 1000000; i++){
    if(isPrime(i)){
        primesBelowMillion.push(i)
    }
}


// let total = 0
// for(let i = 0; i <=20; i++){
//     console.log(primesBelowMillion[i])
//     total+= primesBelowMillion[i]
// }
console.log(primesBelowMillion.length)