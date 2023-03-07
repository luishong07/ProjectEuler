// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
const DigitCancel = () => {
    let countLargerThanOne = 0;
    let result = 1
    for (let i = 10; i <= 99; i++) {
        for (let j = 10; j <= 99; j++) {
            let fraction = i / j;
            if (fraction < 1) {
                // count++;
                // console.log(`${i}/${j}`)

                let stringNumerator = i.toString();
                let stringDenominator = j.toString();

                let numeratorArray = stringNumerator
                    .split("")
                    .map((n) => parseInt(n));

                let denominatorArray = stringDenominator
                    .split("")
                    .map((n) => parseInt(n));


                let newNumerator = numeratorArray.reduce((accu, current) => {
                    return accu * current;
                }, 1);

                let sharedDigits = numeratorArray.some(n => denominatorArray.indexOf(n) >= 0)

                let newDenominator = denominatorArray.reduce(
                    (accu, current) => {
                        return accu * current;
                    },
                    1
                );

                let newFration = newNumerator / newDenominator;

                // if (newDenominator == 0) {
                //     // console.log("Denominator zero");
                // }
                // console.log(newFration)
                
                if (fraction == newFration && newDenominator != 0 && sharedDigits) {
                    console.log(sharedDigits, fraction, `${i}/${j}`)
                    //check for common digits in numerator and denominator

                    result *= fraction

                }

            }else{
                countLargerThanOne++
            }
        }
    }
    console.log(result);
};
DigitCancel();

// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         return
//     }
//     console.log(i)
// }
