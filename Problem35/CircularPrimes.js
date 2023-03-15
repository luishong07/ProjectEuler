// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

const isPrime = (n) => {
    if (n <= 1) return false;

    if (n == 2 || n == 3) return true;

    if (n % 2 == 0 || n % 3 == 0) return false;

    for (let i = 5; i <= Math.sqrt(n); i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
};

// for(let i = 1000000; i > 0; i--){
//     if(isPrime(i)){
//         console.log(i)
//         return
//     }
// }
let circularPrimes = []
const rotate = (n) => {
    let stringNumber = n.toString().split("");
    // console.log(stringNumber);

    for (let i = 0; i < stringNumber.length; i++) {
        let firstDigit = stringNumber.shift();
        stringNumber.push(firstDigit);
        // console.log(stringNumber)
        let rotatedNumber = parseInt(stringNumber.join(""));
        // console.log(rotatedNumber);
        if(!isPrime(rotatedNumber)){
            return
        }
    }
    circularPrimes.push(n)
};
for(let i = 1000000; i > 1; i--){
    rotate(i)
}
console.log(circularPrimes.length)
