// Take the number 192 and multiply it by each of 1, 2, and 3:

// 192 × 1 = 192
// 192 × 2 = 384
// 192 × 3 = 576
// By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

// What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?
const startNumber = 9;
const endNumber = 1000;

const pandigital1To9 = (n) => {
    let checkPan = true;
    let concatResult = "";
    let i = 1;
    let result;
    while (checkPan) {
        // console.log(concatResult.length)
        if (concatResult.length > 9) {//if concatResult length is greater than 9 stop the loop
            break
            // checkPan = false;
            // result = [concatResult, n, i - 1];
        } else {
            // concatResult += `${i * n}`;
        }
        i++;
    }
    console.log(concatResult)
    // let freq = {};
    // for (let j = 0; j < concatResult.length; j++) {
    //     if (!(concatResult[j] in freq)) {
    //         //if number is not in freq obj
    //         freq[concatResult[j]] = 1; // add it to the obj and set it to one
    //     } else {
    //         //else, it is already there, just add one to it
    //         freq[concatResult[j]] += 1;
    //     }
    // }

    // console.log(Object.values(freq))
    // let freqValues = Object.values(freq);
    // for (let k = 0; k < freqValues.length; k++) {
    //     if (freqValues[k] != 1) {
    //         // console.log("problem")
    //         return false;
    //     }
    // }
    // return parseInt(concatResult)
};
// console.log(pandigital1To9(18).toString().length)
pandigital1To9(18)
// let current = 0;
// let i = 9;
// while (current < 987654321) {
//     console.log(i)
//     current = pandigital1To9(i)
//     if(current){
//         console.log(current)
//     }else{
//         console.log(current)
//     }
//     i++
// }
