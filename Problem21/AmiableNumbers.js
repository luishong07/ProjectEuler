// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

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
// console.log(listDivisors(0))
let amicableTotal = 0
for(let i = 1; i <= 10000; i++){
    let b = listDivisors(i)
    let a = listDivisors(b)
    if(listDivisors(b) == i && listDivisors(i) == b && a != b){
        // console.log(i, a, b)
        amicableTotal += i
    }else{
        // console.log("poop")
    }
}

console.log(amicableTotal)
