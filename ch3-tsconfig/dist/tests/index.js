"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function add(a, b) {
    return a + b;
}
describe("Adding numbers", () => {
    it("should add two numbers", () => {
        assert_1.default.equal(add(2, 3), 5);
    });
});
