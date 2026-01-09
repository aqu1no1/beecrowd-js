var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let val1 = parseFloat(lines[0]);
let val2 = parseFloat(lines[1]);
let val3 = parseFloat(lines[2]);

val1 = val1 * 2;
val2 = val2 * 3;
val3 = val3 * 5;
let result = (val1 + val2 + val3) / 10;
console.log("MEDIA = " + result.toFixed(1));
