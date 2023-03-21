// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

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

const truncateLeft2Right = (n) => {
    let stringNumber = n.toString();
    for (
        let i = 0, j = stringNumber.length;
        i < stringNumber.length;
        i++, j--
    ) {
        // console.log(stringNumber.substring(i), stringNumber.substring(0,j))
        if (
            !isPrime(parseInt(stringNumber.substring(i))) ||
            !isPrime(parseInt(stringNumber.substring(0, j)))
        ) {
            return false;
        }
    }
    return true;
};
let count = 0;
let n = 10;
let sum = 0;
while (count < 11) {
    // let stringNum = n.toString()
    if (truncateLeft2Right(n)) {
        sum += n;
        count++;
        console.log(n);
    }
    n++;
}
console.log(sum)
// console.log(n.toString().split("").shift())

// console.log(truncateLeft2Right(10));
