// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: As 1! = 1 and 2! = 2 are not sums they are not included.


const sumOfFactorials = (n)=>{
    let numberString = n.toString()
    let stringArray = numberString.split("").map(n => factorial(parseInt(n)))
    let total = stringArray.reduce((acc, current)=>{
        return acc + current
    },0)
    // console.log(total)
    return total
}

const factorial = (number) => {
    let total = 1;
    if (number == 0) {
        return 1;
    }
    for (let i = 1; i <= number; i++) {
        total *= i;
    }
    return total;
};

// sumOfFactorials(151)
// console.log(factorial(0));

const DigitFactorial = () => {
    for(let i = 10; i < 99999; i++){
        if(sumOfFactorials(i) == i){
            console.log( i, sumOfFactorials(i));
        }
    }
};
DigitFactorial()
