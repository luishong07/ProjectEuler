// The series, 1^1 + 2^2 + 3^3 + ... 10^10 = 10405071317
// Find the last ten digits of the series , 1^1 + 2^2 + 3^3 + ... 1000^1000


// let n = 1n
let total = 0n
for(let i = 1n; i <= 1000n; i+=1n){
    let p = i**i
    total += p
}
console.log(total.toString().slice(-10))