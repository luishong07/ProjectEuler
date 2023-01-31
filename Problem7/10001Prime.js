// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function isPrime(n) {
  // Check if n=1 or n=0
  if (n <= 1) return false;
  // Check if n=2 or n=3
  if (n == 2 || n == 3) return true;
  // Check whether n is divisible by 2 or 3
  if (n % 2 == 0 || n % 3 == 0) return false;
  // Check from 5 to square root of n
  // Iterate i by (i+6)
  for (var i = 5; i <= Math.sqrt(n); i = i + 6)
    if (n % i == 0 || n % (i + 2) == 0) return false;

  return true;
}

const BigPrime = () => {
  let primeIndex = 1;
  let number = 1;
  let targetIndex = 10001;
  while (primeIndex <= targetIndex) {
    //check if number is prime
    // console.log(number, isPrime(number))

    if (isPrime(number)) {
      if (primeIndex == targetIndex) {
        // console.log(`${primeIndex}th is ${number}`);
        break;
      }
      //if it is, add one to primeIndex
      primeIndex += 1;
    } else {
      //if it is not, do nothing
    }

    number += 1;
    //add one to number
  }
  // console.log(number, primeIndex)
  // let number = 1

  // let n1 = isPrime(66)

  // console.log(n1)
    return number
    //   console.log(number);
}

module.exports = BigPrime