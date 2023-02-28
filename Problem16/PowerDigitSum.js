// // 2^15 = 32768 and the sum of its digits is 3 + 2 + 7+ 6 + 8 = 26
// What is the sum of the digits of the number 2^1000?
const PowerDigitSum = ()=>{

    let total = 1n
    
    for(let i = 0; i < 1000; i++){
        total *= 2n
    }
    let totalArray = total.toString()
    let sum = 0n
    for(let i = 0; i < totalArray.length; i++){
        // console.log(totalArray[i])
        sum+=BigInt(parseInt(totalArray[i])) 
    }
    // console.log(sum)
    // console.log(totalArray)
    return sum
}

module.exports = PowerDigitSum