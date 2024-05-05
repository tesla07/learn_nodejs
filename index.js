const math = require("./math.js");
let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let re1 = math.add(num1, num2);
let re2 = math.sub(num1, num2);
 console.log(`sum of numbers ${num1} and ${num2} is ${re1} and difference is ${re2}`);