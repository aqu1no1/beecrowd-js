var input = require("fs").readFileSync("entrada.txt", "utf8");
//var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let j = 60;
let i = 1;

console.log(`I=${i} J=${j}`);
while (j > 0) {
  i += 3;
  j -= 5;
  console.log(`I=${i} J=${j}`);
}
