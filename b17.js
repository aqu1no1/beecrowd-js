var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let hours = parseInt(lines[0]);
let veloc = parseInt(lines[1]);

let space = veloc * hours;
let res = space / 12;
console.log(res.toFixed(3));
