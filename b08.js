//var input = require("fs").readFileSync("entrada.txt", "utf8");
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let number = parseInt(lines[0]);
let salaryPerHour = parseInt(lines[1]);
let valuePerHour = parseFloat(lines[2]);

let calcOfSalary = salaryPerHour * valuePerHour;
console.log("NUMBER = " + number);
console.log("SALARY = U$ " + calcOfSalary.toFixed(2));
