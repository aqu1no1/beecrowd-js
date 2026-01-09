//var input = require("fs").readFileSync("entrada.txt", "utf8");
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var value1 = parseInt(lines[0]);
var value2 = parseInt(lines[1]);
var result = value1 + value2;
console.log("X = " + result);
