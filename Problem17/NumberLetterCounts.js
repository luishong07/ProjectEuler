// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

let singleDigits = {
    '1': 'one',
    '2':'two',
    '3':'three',
    '4':'four',
    '5':'five',
    '6':'six',
    '7':'seven',
    '8':'eight',
    '9':'nine',
}
let teens = {
    '10':'ten',
    '11':'eleven',
    '12':'twelve',
    '13':'thirteen',
    '14':'fourteen',
    '15':'fifteen',
    '16':'sixteen',
    '17':'seventeen',
    '18':'eighteen',
    '19':'nineteen',
}
let tens = {
    // '1': 'one',
    '2':'twenty',
    '3':'thirty',
    '4':'forty',
    '5':'fifty',
    '6':'sixty',
    '7':'seventy',
    '8':'eighty',
    '9':'ninty',
}
let hundreds= {
    '1':'onehundred',
    '2':'twohundred',
    '3':'threehundred',
    '4':'fourhundred',
    '5':'fivehundred',
    '6':'sixhundred',
    '7':'sevenhundred',
    '8':'eighthundred',
    '9':'ninehundred',
}

const numberToWords = (n) => {
    let numberString = n.toString()
    let digitCount = numberString.length
    let word = ""
    let lastTwo = numberString.slice(-2)
    // console.log(lastTwo)
    //this is for greater than 19 and less than 99
    // if(lastTwo[1] == 0 && lastTwo[0] == 0){
    //     word+=""
    // }
    // if(lastTwo[0] != 0 && lastTwo[0] != 1){
    //     word+=tens[lastTwo[0]]
    //     word+=singleDigits[lastTwo[1]]?singleDigits[lastTwo[1]]:""
    // }
    if(lastTwo[0] ==0 && lastTwo[1] != 0){
        // console.log(lastTwo)
        word+=singleDigits[lastTwo[1]]
    }
    if(lastTwo[0] == 1 ){
        console.log(lastTwo)
        // word+=teens[lastTwo[1]]
    }
    


    // console.log(word)
}

for(let i = 1; i <=19; i++){
    // console.log(`${i}`.length == 1 ? `0${i}`:`${i}` )
    let numstring = `${i}`.length == 1 ? `0${i}`:`${i}` 
    numberToWords(numstring)
}


// numberToWords(400)

// let total = 0
// for(let i = 1; i <= 3; i++){
//     total += numberToWords(i)
// }

// console.log(total)