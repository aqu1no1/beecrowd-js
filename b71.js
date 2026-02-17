var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let num1 = parseInt(lines[0]);
let num2 = parseInt(lines[1]);
let sum = 0

for (let i = num1 - 1; i > num2; i--) {
    if (i % 2 !== 0) {
      sum+=i
  }
}

console.log(sum)
