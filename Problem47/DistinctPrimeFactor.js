// The first two consecutive numbers to have two distinct prime factors are:
// 14=2x7
// 15=3x5

 
// The first three consecutive numbers to have three distinct prime factors are:
// 644=2^2x7x23
// 645=3x5x43
// 646=2x17x19
 
// Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?


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

const listDivisors = (n) => {
    let list = []
    // let noOfDivisors 
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
    // noOfDivisors = list.length
    return list
}


const checkFactors = (list)=>{
    let filteredList = list.filter(number=> isPrime(number))
    if(filteredList.length === 4) return true
    return false
    // return filteredList
}

// let list = listDivisors(1308)
// console.log(checkFactors(list))

// console.log(listDivisors(644))
let i = 647
let found = false
while(!found){
    let firstInt = listDivisors(i)
    let secondInt = listDivisors(i+1)
    let thirdInt = listDivisors(i+2)
    let fourthInt = listDivisors(i+3)

    if(
        checkFactors(firstInt) &&
        checkFactors(secondInt)&&
        checkFactors(thirdInt)&&
        checkFactors(fourthInt)
    ){
        console.log(i)
        found = !found
        // return
    }
    i++

}