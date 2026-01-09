var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let val1 = parseFloat(lines[0]);
let val2 = parseFloat(lines[1]);

val1 = val1 * 3.5;
val2 = val2 * 7.5;

let result = (val1 + val2) / 11;
console.log("MEDIA = " + result.toFixed(5));
