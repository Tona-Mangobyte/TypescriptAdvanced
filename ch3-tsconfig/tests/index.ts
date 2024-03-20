import assert from "assert";

function add(a: number, b: number): number {
    return a + b;
}
describe("Adding numbers", () => {
    it("should add two numbers", () => {
        assert.equal(add(2, 3), 5);
    });
});
