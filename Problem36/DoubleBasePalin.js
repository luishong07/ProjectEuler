// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)
const isPalindrome = (word) => {
    let count = word.length;
    for (let n = 0; n <= word.length / 2; n++, count--) {
        // console.log(word[n], word[count-1])
        // console.log(n, count)
        if (!(word[n] == word[count - 1])) {
            // console.log("not a palindrome")
            // isPalindrome = false
            return false;
        }
    }
    // console.log("is palin")
    return true;
};
const DoubleBasePalin = () => {
    let sum = 0;
    for (let i = 1; i < 1000000; i++) {
        let binaryNum = i.toString(2);
        if(isPalindrome(`${i}`) && isPalindrome(binaryNum)){
            // console.log(`${i}`, binaryNum);
            sum += i
        }
    }
    console.log(sum);
};
// DoubleBasePalin();
