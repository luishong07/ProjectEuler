// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2	= 	0.5
// 1/3	= 	0.(3)
// 1/4	= 	0.25
// 1/5	= 	0.2
// 1/6	= 	0.1(6)
// 1/7	= 	0.(142857)
// 1/8	= 	0.125
// 1/9	= 	0.(1)
// 1/10	= 	0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
const isRepeat = (str) => {
    if(!str.length){ return false}

    for(let j = 1; (j <= str.length/2); j++){
        if(str.length % j != 0){
            continue
        }
        let flag = true
        for(let i = j; i < str.length; ++i){
            if(str[i] != str[i -j]){
                flag = false
                break
            }
        }
        if(flag) {return true}
    }
    return false

}

const isRepeating = (str = '') => {
    if (!str.length){
       return false
    };
    for(let j = 1; (j <= str.length / 2); j++){
       if (str.length % j != 0){
          continue
       };
       let flag = true;
       for(let i = j; i < str.length; ++ i){
          if(str[i] != str[i - j]){
             flag = false;
                break;
          };
       };
       if(flag){
          return true;
       };
    };
    return false;
 };

console.log(isRepeat('carcarcar'));
for(let i = 1; i < 100; i++){
    let fraction = 1 / i
    // console.log(fraction.toString())
    let decimals = fraction.toString().slice(2)
    if(isRepeat(decimals)) console.log(i, isRepeat(decimals));

}