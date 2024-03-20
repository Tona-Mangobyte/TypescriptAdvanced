import _ from "lodash"
/** @typedef { import ("@types/person").Person } Person */

/**
 * @param {Person} person
 */
function printPerson(person) {
    console.log(person.name);
}

console.log('Hello, TypeScript!')
printPerson({ name: 'John', age: 25 })

const result = _.flattenDeep([1, [2, [3, [4]], 5]]);
console.log(result);
