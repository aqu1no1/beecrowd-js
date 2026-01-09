//var input = require("fs").readFileSync("entrada.txt", "utf8");
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let name = toString(lines[0]);
let salary = parseFloat(lines[1]);
let totalOfSells = parseFloat(lines[2]);

let calcOfBonus = totalOfSells * 0.15;
salary = salary + calcOfBonus;

console.log("TOTAL = R$ " + salary.toFixed(2));
