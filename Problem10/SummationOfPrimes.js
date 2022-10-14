// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const isPrime = (n)=>{
    if(n <= 1) return false

    if(n == 2 || n == 3) return true

    if(n % 2 == 0 || n % 3 == 0) return false

    for(let i = 5; i <= Math.sqrt(n); i = i+6){
        if(n % i == 0 || n % (i+2) ==0){
            return false
        }
    }
    return true
}
let primeSum = 0
for(let i = 1; i <= 2000000; i++){
    //check if it is prime
    // console.log(i)
    if(isPrime(i)){
        // console.log(i)
        primeSum+=i
    }

}
console.log(primeSum,"sum")