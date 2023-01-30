// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

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
  // console.log("is palin");
  return word;
};
const LargestPalindrom = () => {
  let count = 0;
  let p = 0;
  let palin = null;
  let max = -1;
  for (let i = 999; i >= 100; i--) {
    if (max >= i * 999) {
      break;
    }
    for (let j = 999; j >= 100; j--) {
      // let tempLength = temp.length
      // console.log(temp)
      let temp = `${i * j}`;
      let p = i * j;
      if (max < p && isPalindrome(temp)) {
        max = p;
        // console.log(i, j);
        // console.log(temp);
        // return temp
      }
    }
  }
  return max
};

module.exports = LargestPalindrom
// console.log(palin)
// console.log(c)
// let word = "hellos"
// let word= "asdffdsa"
let word1 = "aydeedsa";
let word2 = "asdffdsa";
// let isPalindrome

// let is = isPalindrome(word2)
// console.log(is)
// let isNot =  isPalindrome(word1)
// console.log(isNot)
