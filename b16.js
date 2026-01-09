var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let km = parseInt(lines[0]);

let res = km * 2;
console.log(res + " minutos");
