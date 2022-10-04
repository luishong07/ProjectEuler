// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 

let target = 600851475143 
// let target =    131958275445
let result = -1
while(target % 2 == 0){
    target =target / 2
    result = 2
}

while(target % 3 == 0){
    target =target / 3
    result = 3
}

for(let i = 5; i <= Math.sqrt(target); i += 6){
    while(target % i == 0){
        result = i
        target = target / i
    }
    while(target % (i + 2) == 0){
        result = i + 2
        target = target/(i + 2)
    }
}

let output = target > 4 ? target : result
console.log(output)

// let factorsList = []
// for(let i = 1; i < target; i++){
//     if(target % i == 0){
//         // console.log(i)
//         factorsList.push(i)
//     }
// }
// console.log(factorsList)
// let primeFactorsList = factorsList.filter((f) => isPrime(f))

// function isPrime(n)
// {
//     // Check if n=1 or n=0
//     if (n <= 1)
//         return ;
//     // Check if n=2 or n=3
//     if (n == 2 || n == 3)
//         return n;
//     // Check whether n is divisible by 2 or 3
//     if (n % 2 == 0 || n % 3 == 0)
//         return ;
//     // Check from 5 to square root of n
//     // Iterate i by (i+6)
//     for (var i = 5; i <= Math.sqrt(n); i = i + 6)
//         if (n % i == 0 || n % (i + 2) == 0)
//             return ;
 
//     return n;
// }

// console.log(primeFactorsList)