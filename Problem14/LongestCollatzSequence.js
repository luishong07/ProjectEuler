// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.
// let chain = 0
const collatzRun =(n,chain)=>{
    let initial = n
    while(n > 1){
        // console.log(n)
        if(n % 2 === 0){
            n = n /2
            chain++
        }else{
            n = 3*n + 1
            chain++
        }
    }
    return [initial, chain]
   
}
// let out =  collatzRun(13,0)
// console.log(out)


const LongestCollatz = ()=>{

    let longestChain = 0
    let currentChain = 0
    let currentValue = 0
    let longestStarter = 0
    let currentRun 
    for(let i = 1000000; i > 0; i--){
        currentRun = collatzRun(i,1)
        currentChain = currentRun[1]
        currentValue = currentRun[0]
        //    console.log(currentValue, currentChain)
        if(currentChain > longestChain){
            longestChain = currentChain
            longestStarter = currentValue
            
        }
    }
    // console.log(longestStarter, longestChain,"end")
    return longestStarter
}

module.exports = LongestCollatz