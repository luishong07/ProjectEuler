// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

// Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.
let elements = [0,1,2,3,4,5,6,7,8,9]
// let elements = [0,1,2,3,4]


const permutator = (inputArr) => {//returns all pandigital numbers based on array passed
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
    permute(inputArr)
    // console.log( result.length);
    return result

}

let pandigitalNumbers = permutator(elements)// contains all pandigital numbers
let subDivisibleNumbers = []// final array of numbers that meet criteria
let total = 0// sum of correct numbers

const subStringDivide = ()=>{
    for(let i = 0; i < pandigitalNumbers.length; i++){
        let currentNumber = pandigitalNumbers[i]
        // let currentNumber = '1406357289'

        let d2 = parseInt(currentNumber.substring(1,4)) % 2 == 0  //divisible by 2//
        let d3 = parseInt(currentNumber.substring(2,5)) % 3 == 0 //divisible by 3
        let d4 = parseInt(currentNumber.substring(3,6)) % 5 == 0 //divisible by 5
        let d5 = parseInt(currentNumber.substring(4,7)) % 7 == 0  //divisible by 7
        let d6 = parseInt(currentNumber.substring(5,8)) % 11 == 0  //divisible by 11
        let d7 = parseInt(currentNumber.substring(6,9)) % 13 == 0  //divisible by 13
        let d8 = parseInt(currentNumber.substring(7,10)) % 17 == 0  //divisible by 17

        if(d2 && d3 && d4 && d5 && d6 && d7 && d8){
            total += parseInt(currentNumber)
        }


    }
    return total
}
