import assert from "assert";
import {add} from "./math";

describe("Adding numbers", () => {
    it("should add two numbers", () => {
        assert.equal(add(2, 3), 5);
    });
});
