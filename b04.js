//var input = require("fs").readFileSync("entrada.txt", "utf8");
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let val1 = parseInt(lines[0]);
let val2 = parseInt(lines[1]);

let result = val2 * val1;
console.log("PROD = " + result);
