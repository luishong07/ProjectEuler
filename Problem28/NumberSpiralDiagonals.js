// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?


let rows = 1001
let columns = 1001

let matrix =[]

for (let i=0; i < rows; i++){
    matrix.push([])
}

// let arr = [
//     1, 2, 3, 4, 5, 6,
//     7, 8, 9, 10, 11, 12,
//     13, 14, 15, 16, 17, 18,
//     19, 20, 21, 22, 23, 24, 25
// ]

let totalCount = rows * columns 
let arr =[]
for(let i = totalCount; i >= 1; i--){
    arr.push(i)
}
// console.log(arr);
//function copied from geeks for geeks
function MatrixToSpiral(arr, mat){
    let top = 0
    let bottom = rows - 1
    let left = 0
    let right = columns - 1;

    let index = 0



    while(true){
        if(left > right) break
        //top row
        for(let i  = left; i<= right; i++){
            mat[top][i] = arr[index++]
        }
        top++

        if(top > bottom) break
        //right column
        for(let i = top; i <= bottom;i++){
            mat[i][right] = arr[index++]
        }
        right--

        if(left > right) break
        //bottom row
        for(let i = right; i >= left; i--){
            mat[bottom][i] = arr[index++]

        }
        bottom--

        if(top > bottom) break
        //left column
        for(let i = bottom; i >= top; i--){
            mat[i][left] = arr[index++]
        }
        left++
    }
}
function printSpiral(mat){
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            console.log(mat[i]);
        }
    }
}
MatrixToSpiral(arr, matrix)
// printSpiral(matrix)
// console.log(matrix);
let diagonal = 0
let antiDiagonal = 0
for(let i = 0, d = matrix.length-1 ; i <= matrix.length -1; i++, d--){
    // console.log(matrix[i][d]);
    diagonal += matrix[i][i]
    antiDiagonal += matrix[i][d]
}
let total = diagonal + antiDiagonal - 1
console.log(total);

