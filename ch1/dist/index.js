"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
/** @typedef { import ("@types/person").Person } Person */
/**
 * @param {Person} person
 */
function printPerson(person) {
    console.log(person.name);
}
console.log('Hello, TypeScript!');
printPerson({ name: 'John', age: 25 });
const result = lodash_1.default.flattenDeep([1, [2, [3, [4]], 5]]);
console.log(result);
