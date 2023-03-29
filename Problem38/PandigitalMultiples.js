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
    let isPandigital = true;
    let concatResult = "";
    let i = 1;
    let result;
    while (isPandigital) {
        // console.log(concatResult)
        if (concatResult.length >= 9) {
            isPandigital = false;
            result = [concatResult, n, i - 1];
        } else {
            concatResult += `${i * n}`;
            i++;
        }
    }

    let freq = {};
    for (let j = 0; j < concatResult.length; j++) {
        if (!(concatResult[j] in freq)) {
            //if number is not in freq obj
            freq[concatResult[j]] = 1; // add it to the obj and set it to one
        } else {
            //else, it is already there, just add one to it
            freq[concatResult[j]] += 1;
        }
    }

    console.log(Object.values(freq))
    

};
pandigital1To9(192);
// while(startNumber < endNumber){
//     let result

// }
