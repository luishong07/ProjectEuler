// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?

// let elements = [1,2,3,4]
// let elements = '1234'

const permutator = (inputArr) => {
    // this returns all possible permutations of the elements in provided array
    let result = [];

    const permute = (arr, m = "") => {
        if (arr.length === 0) {
            result.push(parseInt(m));
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    };
    permute(elements);
    return result;
};
// console.log(permutator(elements))
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

let elements = [1, 2];
let i = 2;
while (i < 10) {
    let temp = 0;
    let permutations = permutator(elements);// get all permutations involving n-digits: 1 to n
    for (let j = 0; j < permutations.length; j++) {//loop over the entire array and find the largest and prime
        if (permutations[j] > temp && isPrime(permutations[j])) {
            temp = permutations[j]
        }
    }
    console.log(i,temp)
    i++;
    elements.push(i)
}
