// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
const DigitCancel = () => {
    let count = 0;
    for (let i = 1; i <= 99; i++) {
        for (let j = 1; j <= 99; j++) {
            let fraction = i / j;
            if (fraction >= 1) {
                count++;
                // console.log(`${i}/${j}`)
                return
            }
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

            let newDenominator = denominatorArray.reduce((accu, current) => {
                return accu * current;
            }, 1);

            let newFration = newNumerator / newDenominator;

            // if (newDenominator == 0) {
            //     return;
            // }

            // if (fraction == newFration) {
            //     console.log(`${i}/${j}`)

            // }
        }
    }
    console.log(count);
};
DigitCancel()