const _ = require("lodash");

const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
const unique = _.uniq(numbers);

console.log(`Original: ${numbers}`);
console.log(`Unique: ${unique}`);
