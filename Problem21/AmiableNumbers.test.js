const AmicableNumbers = require("./AmiableNumbers");
test("Evaluate the sum of all the amicable numbers under 10000.", () => {
    expect(AmicableNumbers()).toBe(31626);
});
