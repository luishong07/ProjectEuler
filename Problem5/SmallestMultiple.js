// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//getting all even numbers from 1 to 20
// let evenArray = []
// for(let i = 1; i <= 20; i++){
//     if(i % 2 ==0){
//         evenArray.push(i)
//     }
// }
// // console.log(evenArray)
//using brute force
let found = false
let smallest = 20
while(!found){
    if(
        smallest%1 == 0 &&
        smallest%2 == 0 &&
        smallest%3 == 0 &&
        smallest%4 == 0 &&
        smallest%5 == 0 &&
        smallest%6 == 0 &&
        smallest%7 == 0 &&
        smallest%8 == 0 &&
        smallest%9 == 0 &&
        smallest%10 == 0 &&
        smallest%11 == 0 &&
        smallest%12 == 0 &&
        smallest%13 == 0 &&
        smallest%14 == 0 &&
        smallest%15 == 0 &&
        smallest%16 == 0 &&
        smallest%17 == 0 &&
        smallest%18 == 0 &&
        smallest%19 == 0 &&
        smallest%20 == 0 
    ){
        console.log("found it", smallest)
        found = true
        return
    }
    else{
        smallest++
    }
        

}
// to do: find more optimal approach
