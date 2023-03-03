// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
let multiplicand = 39;
let multiplier = 186;
let product = multiplicand * multiplier;
let IntegerString = "123456789";
let identityString = `${multiplicand}${multiplier}${product}`;
// console.log(identityString);
// console.log(9*8*7*6*5*4*3*2*1);

//conditions for identity
//1.length 9
//2.no duplicates
//3.

const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    };

    permute(inputArr);

    return result;
};
// console.log(permutator(["1", "2", "3", "4", "5", "6", "7", "8", "9"]).length);
let permutations =  permutator(["1", "2", "3","4","5","6"])
const arrayToString = (permutations) => {
    let result =  []
    for(let i = 0; i < permutations.length; i++){
        result.push(permutations[i].join(""))
        // console.log(permutations[i]);
    }
    return result
};
// console.log(arrayToString(permutations).length)
let arr = arrayToString(permutations)
const pandigitalCheck = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        let n = arr[i]
        let multiplicand = parseInt(n.slice(0,1))
        let multiplier = parseInt(n.slice(1,3))
        let product = parseInt(n.slice(3))
        // console.log(n, multiplicand, multiplier,product)
        if(multiplicand*multiplier==product){
            console.log(n);
        }
        // console.log(n)
    }
}
// pandigitalCheck(arr)
