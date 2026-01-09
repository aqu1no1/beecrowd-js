var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let a = parseInt(lines[0]);
let b = parseFloat(lines[1]);

let res = a / b;
console.log(res.toFixed(3) + " km/l");
