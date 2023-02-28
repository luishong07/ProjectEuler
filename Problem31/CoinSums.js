// In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// // How many different ways can £2 be made using any number of coins?
let twoPounds = 200
let onePound = 100
let fiftyP = 50
let twentyP = 20
let tenP = 10
let fiveP = 5
let twoP = 2
let oneP = 1

let onePoundChange = 2
let fiftyPChange = 4
let twentyPChange = 10
let tenPChange = 20
let fivePChange = 40
let twoPChange = 100
let onePChange = 200
let sum = 0
let count = 0
for(let p100 = 0; p100 <= onePoundChange; p100++){
    for(let p50 = 0; p50 <= fiftyPChange; p50++){
        for(let p20 = 0; p20 <= twentyPChange; p20++){
            for(let p10 = 0; p10<= tenPChange; p10++){
                for(let p5 = 0; p5 <= fivePChange; p5++){
                    for(let p2 = 0; p2 <= twoPChange; p2++){
                        for(let p1 = 0; p1 <= onePChange; p1++){

                            sum = onePound*p100 + fiftyP*p50 + twentyP*p20+tenP*p10+fiveP*p5+twoP*p2+oneP*p1
                            if(sum == 200){
                                console.log('success');
                                // return
                                console.log(100,p100,50,p50,20,p20,10,p10,5,p5,2,p2,1,p1)
                                count++
                            }
                            
                        }
                    }
                }
            }
        }
    }
}
console.log(count + 1); //+1 from adding one single 2 pound coin