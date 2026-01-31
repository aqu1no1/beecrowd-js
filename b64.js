var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let num1 = parseInt(lines[0]);
let num2 = parseFloat(lines[1]);
let num3 = parseFloat(lines[2]);
let num4 = parseFloat(lines[3]);
let num5 = parseFloat(lines[4]);
let num6 = parseFloat(lines[5]);

let arrayNumber = [num1, num2, num3, num4, num5, num6];
let count = 0;
let result = 0;
let sum = 0;

for (let i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] > 0) {
    sum += arrayNumber[i];
    count++;
  }
}

result = sum / count;
result = sum / count;

console.log(count + " valores positivos");
console.log(result.toFixed(1));
