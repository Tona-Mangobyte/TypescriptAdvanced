import _ from "lodash";
const result = _.flattenDeep([1, [2, [3, [4]], 5]]);
console.log(result);
