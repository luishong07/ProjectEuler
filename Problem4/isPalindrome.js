const isPalindrome = (word) => {
    
    let count = word.length
    for(let n = 0; n <= word.length/2; n++,count--){
        // console.log(word[n], word[count-1])
        // console.log(n, count)
        if(!(word[n] == word[count-1])){
            // console.log("not a palindrome") 
            // isPalindrome = false
            return false
        }
        
    }
    // console.log("is palin")
    return word
}


let p1 = "1334331"//odd and palin
let p2 = "1221"//even and palin
let p3 = "hello"//odd and not palin
let p4 = "dsfg"// even and not palin

let palin = isPalindrome(p1)
console.log(palin)


// public static boolean isPalindrome(int nr) {
//     int rev = 0;                    // the reversed number
//     int x = nr;                     // store the default value (it will be changed)
//     while (x > 0) {
//         rev = 10 * rev + x % 10;
//         x /= 10;
//     }
//     return nr == rev;               // returns true if the number is palindrome
// }