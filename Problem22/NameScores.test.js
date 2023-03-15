const NameScores = require('./NameScores')
test("What is the total of all the name scores in the file?",()=>{
    expect(NameScores()).toBe(871198282)
})