// The arithmetic sequence, 1487, 4817, 8147
// , in which each of the terms increases by 3330
// , is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 
// 4-digit numbers are permutations of one another.

// There are no arithmetic sequences made up of three 
// 1-, 
// 2-, or 
// 3-digit primes, exhibiting this property, but there is one other 
// 4-digit increasing sequence.

// What // 12-digit number do you form by concatenating the three terms in this sequence?

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

let fourDigitPrimes = []//all four-digit primes

for(let i = 1001; i <= 9998; i ++){
    if(isPrime(i)){
        fourDigitPrimes.push(i)
    }
}
// console.log(isPrime(7847))
// let limit = fourDigitPrimes.indexOf(6669)

// console.log(limit)

const permutator = (inputArr) => {
    let result = []

    const permute = (arr, m ="")=>{
        if(arr.length === 0){
            result.push(m)
        }else{
            for(let i = 0; i < arr.length; i++){
                let curr = arr.slice()
                let next = curr.splice(i, 1)
                permute(curr.slice(), m.concat(next))
            }
        }
    }
    // console.log(inputArr)
    permute(inputArr)
    // console.log(result[999999]);
    return result

}

// console.log(permutator(['1','4','8','7']))

// const permutations = permutator()//permutations of any given four-digit number

// console.log(fourDigitPrimes.length)

for(let i = 0; i < fourDigitPrimes.length; i++){
    let temp1 = fourDigitPrimes[i] + 3330
    let temp2 = fourDigitPrimes[i] + 6660
    let numberAsArray = fourDigitPrimes[i].toString().split("")

    let inRange = fourDigitPrimes.includes(temp1) && fourDigitPrimes.includes(temp2)
    let permutations = permutator(numberAsArray)
    let isPermutation = permutations.includes(temp1.toString()) && permutations.includes(temp2.toString())

    if(inRange && isPermutation){
        console.log(fourDigitPrimes[i], temp1, temp2)
    }
}

