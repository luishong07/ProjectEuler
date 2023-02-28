const LongestCollatz = require("./LongestCollatzSequence");

test("Which starting number, under one million, produces the longest chain?", () => {
    expect(LongestCollatz()).toBe(837799);
});
