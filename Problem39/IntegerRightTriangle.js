// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

//equation for right triangl knowing the perimeter and one side
//a = P(P-2*b)/(2(P-b))
const P = 600

const numberOfSolutions = (perimeter)=>{
    let result = []

    for(let b = 1; b < perimeter/2; b++){
        let a = perimeter*(perimeter-2*b)/(2*(perimeter-b))
        if(Number.isInteger(a)){
            let ab = [a,b].sort().map(l => l.toString()).join("")
            // console.log(a,b)
            if(!result.includes(ab)){
                result.push(ab)
            }
            
        }
        // return result.length
    }
    return result.length
}
// console.log(numberOfSolutions(500))
let result = 0
let current = 0
for(let i = 1; i <=1000 ; i++){
    if(numberOfSolutions(i) > current){
        current = numberOfSolutions(i)
        result = i
    }

}
console.log(result)