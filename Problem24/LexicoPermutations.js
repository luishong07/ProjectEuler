// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
let elements = [0,1,2,3,4,5,6,7,8,9]

const permutator = (inputArr) => {
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
    permute(elements)
    // console.log(result[999999]);
    return result[999999]

}

// permutator(elements)
module.exports =  permutator