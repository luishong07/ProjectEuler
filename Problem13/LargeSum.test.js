const LargeSum = require("./LargeSum");

test("Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.", () => {
    expect(LargeSum()).toBe("5537376230");
});

