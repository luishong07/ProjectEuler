// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

const listDivisors = (n) => {
    let list = []
    let noOfDivisors 
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            if(parseInt((n/i), 10) == i){
                list.push(i)
            }else {
                list.push(i)
                list.push(n/i)
            }
        }
    }
    noOfDivisors = list.length
    let indexOfSelf = list.indexOf(n)
    list.splice(indexOfSelf,1)
    let posibleAmiNum = list.reduce((accumulator, currentValue) => accumulator + currentValue,0)
    return posibleAmiNum
}
// console.log(listDivisors.(24));
const NonAbundantSums = ()=>{

    let abundantTotal = 0
    for(let i = 1; i < 220; i++){
        if(listDivisors(i) >= i){
            console.log(i);
            abundantTotal+= i
        }
    }
    // console.log(abundantTotal);
    return abundantTotal
}

module.exports = NonAbundantSums