// Euler discovered the remarkable quadratic formula:
// n^2 + n + 41
// It turns out that the formula will produce 40 primes of the consecutive integer values 0<=n<=39
// However, when n = 40, 40^2+40+41=40(40+1)+41 is divisible by 41, and certainly when n = 41, 41^2 +41+41 is clearly divisible bt 41.
// The incredible formula n^2 -79n +1601 was discovered, which produced 80 primes for the consecutive values 0<=n<=79
// The product of the coefficients, -79 and 1601, is -126479
// Considering quadratics of the form:
// n^2 + an + b, where |a| < 1000 and |b| <= 1000
// where |n| is the modulus/ absolute value of n
// eg |11| = 11 and |-4| = 4
// Find the product of the coefficients, and and b, for the quadratic expression that produces the maximum number of primes
// for  consecu values of n, starting with n = 0

//implementation of first formula

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

let LongChain = 0;
const longestPrimeSequence = (a, b) => {
    let isItPrime = true;
    // let primeArray = []
    let n = 0;
    while (isItPrime) {
        let number = n ** 2 + a * n + b;
        // console.log(n);

        if (!isPrime(number)) {
            isItPrime = false;
            // console.log(n);
            return n;
        }
        n += 1;
    }
};
// longestPrimeSequence(-79,1601)

let A = 999;
let B = 1000;

let count = 0;
let Longest = 0;
let a1;
let b2;
for (let a = -A; a <= A; a++) {
    for (let b = -B; b <= B; b++) {
        console.log(count)
        let PrimeChain = longestPrimeSequence(a, b);
        if (PrimeChain >= Longest) {
            Longest = PrimeChain;
            a1 = a;
            b2 = b;
        }
        count++;
    }
}
console.log(Longest, a1, b2);
