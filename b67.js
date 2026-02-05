var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let num1 = parseInt(lines[0]);

for (let i = 1; i <= num1; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
