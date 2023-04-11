// An irrational decimal fraction is created by concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If dn represents the nth digit of the fractional part, find the value of the following expression.

// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000


let constant = ''
let number = 1

while(constant.length <= 1000000){

    constant = constant.concat(number.toString())
    number++
}
// console.log(constant[11])
let total = 1
for(let i = 1; i <= 1000000; i*=10){
    console.log(constant[i-1])
    total *= parseInt(constant[i-1])
}
console.log(total)